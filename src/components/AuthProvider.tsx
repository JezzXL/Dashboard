import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import AuthContext from '../context/AuthContext';
import type { User, AuthContextType } from '../types/auth';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Verificar autenticação ao montar o componente
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated');
      const userEmail = localStorage.getItem('userEmail');
      
      if (authStatus === 'true' && userEmail) {
        setIsAuthenticated(true);
        setUser({
          email: userEmail,
          name: 'Admin User', // Em produção, viria da API
        });
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Função de login
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulação de chamada API
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Login de demonstração
      if (email === 'admin@example.com' && password === '123456') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', email);
        
        setIsAuthenticated(true);
        setUser({
          email,
          name: 'Admin User',
        });
        
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Erro no login:', error);
      return false;
    }
  };

  // Função de logout
  const logout = (): void => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('rememberMe');
    setIsAuthenticated(false);
    setUser(null);
  };

  const value: AuthContextType = {
    isAuthenticated,
    user,
    login,
    logout,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};