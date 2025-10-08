import React from 'react';
import { User, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import type { Metric } from '../types';

const metrics: Metric[] = [
  { title: 'Total de Usuários', value: 1234, change: 12, icon: User },
  { title: 'Vendas do Mês', value: 45678, change: 8, icon: DollarSign },
  { title: 'Pedidos Pendentes', value: 89, change: -5, icon: ShoppingCart },
  { title: 'Receita Total', value: 120456, change: 15, icon: TrendingUp },
];

const MetricsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        
        return (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value.toLocaleString()}</p>
                <p className={`text-sm ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {metric.change >= 0 ? '+' : ''}{metric.change}% desde o último mês
                </p>
              </div>
              <div className="text-blue-500">
                <Icon className="w-10 h-10" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsCards;
