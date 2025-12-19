import { createContext } from 'react';
import type { AuthContextType } from '../types/auth';

// Cria o contexto mas NÃO exporta
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;