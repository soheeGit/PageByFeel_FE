import React from 'react';
import { menuItems } from '../data/menuItems';

interface NavigationProps {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">PageByFeel</h1>
            <p className="text-xs text-gray-500 ml-3">천천히 읽고, 느끼고, 기록하자.</p>
          </div>
          
          <div className="flex items-center space-x-8">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setSelectedMenu(item.id)}
                className={`flex items-center px-3 py-2 ${
                  selectedMenu === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
                } transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer`}
              >
                <i className={`fas ${item.icon} w-5`}></i>
                <span className="ml-2">{item.id}</span>
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-blue-600 !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-bell"></i>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <i className="fas fa-user text-blue-500"></i>
              </div>
              <div>
                <p className="font-medium text-sm">김독서</p>
                <p className="text-xs text-gray-500">독서 7일째</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
