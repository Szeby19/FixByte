import { useState, useEffect } from 'react';

interface RouterProps {
  children: (route: string) => React.ReactNode;
}

export function Router({ children }: RouterProps) {
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash.slice(1) || 'home';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash.slice(1) || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return <>{children(currentRoute)}</>;
}

export function navigate(route: string) {
  window.location.hash = route;
}