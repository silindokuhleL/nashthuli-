import { createContext, useContext } from 'react';
import { Page } from '../types';

interface NavigationContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
}

export const NavigationContext = createContext<NavigationContextType>({
  currentPage: 'home',
  navigate: () => {},
});

export const useNavigation = () => useContext(NavigationContext);
