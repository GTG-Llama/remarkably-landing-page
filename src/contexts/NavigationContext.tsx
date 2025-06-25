import React, { createContext, useContext, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationContextType {
  getPath: (path: string) => string;
  isInBeta: boolean;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isInBeta = location.pathname.startsWith('/beta');

  const getPath = (path: string) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // Return beta path if in beta context, otherwise return normal path
    return isInBeta ? `/beta/${cleanPath}` : `/${cleanPath}`;
  };

  return (
    <NavigationContext.Provider value={{ getPath, isInBeta }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}; 