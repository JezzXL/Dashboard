import React, { useState } from 'react';
import { User as UserIcon, Edit, Trash2 } from 'lucide-react';
import type { User } from '../types';

const mockUsers: User[] = [
  { id: 1, name: 'João Silva', email: 'joao@example.com', role: 'user', status: 'active', createdAt: '2023-01-15' },
  { id: 2, name: 'Maria Santos', email: 'maria@example.com', role: 'admin', status: 'active', createdAt: '2023-02-20' },
  { id: 3, name: 'Pedro Oliveira', email: 'pedro@example.com', role: 'moderator', status: 'inactive', createdAt: '2023-03-10' },
];

const UsersTable: React.FC = () => {
  const [users] = useState<User[]>(mockUsers);

  const handleEdit = (user: User) => {
    alert(`Editando usuário: ${user.name}`); // Modal real aqui
  };

  const handleDelete = (user: User) => {
    if (confirm(`Deletar ${user.name}?`)) {
      // Lógica de delete
      console.log('Deletado:', user.id);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lista de Usuários</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Criado em</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
                        <UserIcon className="w-5 h-5" />
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{user.createdAt}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button onClick={() => handleEdit(user)} className="text-blue-600 hover:text-blue-900">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(user)} className="text-red-600 hover:text-red-900">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 bg-gray-50 dark:bg-gray-700">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Próxima Página</button>
      </div>
    </div>
  );
};

export default UsersTable;
