import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { SalesData } from '../types';

const data: SalesData[] = [
  { month: 'Jan', value: 400 },
  { month: 'Fev', value: 300 },
  { month: 'Mar', value: 500 },
  { month: 'Abr', value: 280 },
  { month: 'Mai', value: 600 },
  { month: 'Jun', value: 450 },
];

const SalesChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Vendas Mensais</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
