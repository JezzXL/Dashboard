export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface Metric {
  title: string;
  value: number;
  change: number;
  icon: React.ElementType;
}

export interface SalesData {
  month: string;
  value: number;
}