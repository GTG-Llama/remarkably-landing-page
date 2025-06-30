import React, { createContext, useContext, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationContextType {
  getPath: (path: string) => string;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getPath = (path: string) => {
    // Ensure path starts with /
    return path.startsWith('/') ? path : `/${path}`;
  };

  return (
    <NavigationContext.Provider value={{ getPath }}>
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