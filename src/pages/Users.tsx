import React from 'react';
import UsersTable from '../components/UsersTable';

const Users: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Gerenciamento de Usuários</h1>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Adicionar Novo Usuário
        </button>
      </div>
      <UsersTable />
    </div>
  );
};

export default Users;
