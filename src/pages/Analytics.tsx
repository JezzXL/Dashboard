import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { SalesData } from '../types';

const analyticsData: SalesData[] = [
  { month: 'Jan', value: 400 },
  { month: 'Fev', value: 300 },
  { month: 'Mar', value: 500 },
  { month: 'Abr', value: 280 },
  { month: 'Mai', value: 600 },
  { month: 'Jun', value: 450 },
  { month: 'Jul', value: 550 },
];

const Analytics: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Análises</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Vendas por Mês (Gráfico de Barras)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Métricas Chave</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between"><span>Total de Vendas:</span> <span className="font-semibold">R$ 120.456</span></li>
            <li className="flex justify-between"><span>Crescimento:</span> <span className="text-green-600 font-semibold">+15%</span></li>
            <li className="flex justify-between"><span>Usuários Ativos:</span> <span className="font-semibold">1.234</span></li>
            <li className="flex justify-between"><span>Taxa de Conversão:</span> <span className="font-semibold">3.2%</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
