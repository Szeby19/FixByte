import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Upload, X, ArrowLeft, ImagePlus, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Header } from './Header';
import { Footer } from './Footer';
import { navigate } from './Router';
import type { Reference } from './ReferencesPage';

// Hardcoded bejelentkezési adatok
const ADMIN_EMAIL = 'admin@techszerviz.hu';
const ADMIN_PASSWORD = 'TechSzerviz2024';

export function ReferenceAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [references, setReferences] = useState<Reference[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    details: '',
    category: 'Gép összerakás',
    images: [] as string[],
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    loadReferences();
    // Ellenőrizzük, hogy be van-e már jelentkezve
    const authStatus = sessionStorage.getItem('techszerviz_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const loadReferences = () => {
    const stored = localStorage.getItem('techszerviz_references');
    if (stored) {
      setReferences(JSON.parse(stored));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('techszerviz_admin_auth', 'true');
      setEmail('');
      setPassword('');
    } else {
      setLoginError('Helytelen email vagy jelszó!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('techszerviz_admin_auth');
    navigate('home');
  };

  const saveReferences = (refs: Reference[]) => {
    localStorage.setItem('techszerviz_references', JSON.stringify(refs));
    setReferences(refs);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({ 
            ...prev, 
            images: [...prev.images, reader.result as string] 
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.images.length === 0) {
      alert('Kérlek tölts fel legalább egy képet!');
      return;
    }

    if (editingId) {
      // Szerkesztés
      const updated = references.map(ref => 
        ref.id === editingId 
          ? { ...formData, id: editingId }
          : ref
      );
      saveReferences(updated);
    } else {
      // Új hozzáadása
      const newReference: Reference = {
        ...formData,
        id: Date.now().toString()
      };
      saveReferences([...references, newReference]);
    }

    resetForm();
  };

  const handleEdit = (reference: Reference) => {
    setFormData({
      title: reference.title,
      description: reference.description,
      details: reference.details || '',
      category: reference.category,
      images: reference.images,
      date: reference.date
    });
    setEditingId(reference.id);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Biztosan törölni szeretnéd ezt a referenciát?')) {
      saveReferences(references.filter(ref => ref.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      details: '',
      category: 'Gép összerakás',
      images: [],
      date: new Date().toISOString().split('T')[0]
    });
    setEditingId(null);
    setIsFormOpen(false);
  };

  const categories = ['Gép összerakás', 'Javítás', 'Tisztítás/Karbantartás', 'Hálózat kiépítés', 'Hardver upgrade'];

  // Ha nincs bejelentkezve, mutassuk a login képernyőt
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
        <Header />
        
        <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-300px)]">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="mb-2">Admin Bejelentkezés</h1>
              <p className="text-muted-foreground">
                Jelentkezz be a referencia kezelő eléréséhez
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="email">Email cím</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@techszerviz.hu"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Jelszó</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="mt-1"
                />
              </div>

              {loginError && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {loginError}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Bejelentkezés
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => navigate('home')}
              >
                Vissza a főoldalra
              </Button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2">Referencia Kezelő</h1>
            <p className="text-muted-foreground">Adj hozzá vagy szerkeszd a referenciákat</p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => navigate('references')}
              variant="outline"
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Vissza a referenciákhoz
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Kijelentkezés
            </Button>
          </div>
        </div>

        <Button
          onClick={() => setIsFormOpen(true)}
          className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Új referencia hozzáadása
        </Button>

        {/* Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b flex items-center justify-between sticky top-0 bg-white">
                <h2>
                  {editingId ? 'Referencia szerkesztése' : 'Új referencia'}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={resetForm}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <Label htmlFor="title">Cím</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                    placeholder="pl. Gaming PC összerakás - Intel i7"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Kategória</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">Rövid leírás</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    required
                    rows={3}
                    placeholder="Rövid összefoglaló a munkáról..."
                  />
                </div>

                <div>
                  <Label htmlFor="details">Részletes leírás (opcionális)</Label>
                  <Textarea
                    id="details"
                    value={formData.details}
                    onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                    rows={5}
                    placeholder="Részletes információk a munkáról, felhasznált alkatrészek, különleges megoldások, stb..."
                  />
                </div>

                <div>
                  <Label htmlFor="date">Dátum</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="images">Képek (több is feltölthető)</Label>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Input
                        id="images"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="cursor-pointer"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => document.getElementById('images')?.click()}
                      >
                        <ImagePlus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {formData.images.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {formData.images.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={image}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => removeImage(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {editingId ? 'Mentés' : 'Hozzáadás'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                  >
                    Mégse
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Referencia lista */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map(reference => (
            <div key={reference.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={reference.images[0]}
                  alt={reference.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                    {reference.category}
                  </span>
                </div>
                {reference.images.length > 1 && (
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white rounded text-xs">
                    +{reference.images.length - 1} kép
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="mb-2 line-clamp-1">{reference.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {reference.description}
                </p>
                <div className="text-xs text-muted-foreground mb-4">
                  {new Date(reference.date).toLocaleDateString('hu-HU')}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(reference)}
                    className="flex-1"
                  >
                    <Edit className="h-3 w-3 mr-1" />
                    Szerkesztés
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(reference.id)}
                    className="flex-1"
                  >
                    <Trash2 className="h-3 w-3 mr-1" />
                    Törlés
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {references.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-muted-foreground">Még nincsenek referenciák. Adj hozzá az első referenciát!</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}