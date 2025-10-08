import React, { useState } from 'react';
import { Bell, Search, User, Moon, Sun, Menu } from 'lucide-react';

interface HeaderProps {
  onThemeToggle: () => void;
  currentTheme: 'light' | 'dark';
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle, currentTheme, onSidebarToggle }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      {/* Botão de menu para mobile */}
      <button 
        onClick={onSidebarToggle}
        className="md:hidden p-2 mr-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white dark:ring-gray-800"></span>
        </button>
        <button
          onClick={onThemeToggle}
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          {currentTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <div className="flex items-center space-x-2">
          <User className="w-6 h-6 text-gray-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;