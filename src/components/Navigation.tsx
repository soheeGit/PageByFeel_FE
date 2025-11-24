import React, { useState } from 'react';
import { menuItems } from '../data/menuItems';

interface NavigationProps {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
  onLogout?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ selectedMenu, setSelectedMenu, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 로고 */}
          <div className="flex items-center gap-3">
            <img 
              src="/pagebyfeel_logo.png" 
              alt="PageByFeel Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedMenu(item.id)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 inline-flex items-center gap-2 ${
                  selectedMenu === item.id
                    ? 'bg-[#F0A04B] text-white shadow-md'
                    : 'text-gray-700 hover:bg-[#FCE7C8]'
                }`}
              >
                <i className={`fas ${item.icon} text-sm`}></i>
                <span>{item.id}</span>
              </button>
            ))}
            
            {/* 로그아웃 버튼 */}
            {onLogout && (
              <button
                onClick={onLogout}
                className="px-5 py-2.5 rounded-xl font-medium transition-all duration-200 inline-flex items-center gap-2 text-red-600 hover:bg-red-50"
              >
                <i className="fas fa-sign-out-alt text-sm"></i>
                <span>로그아웃</span>
              </button>
            )}
          </div>
          
          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-600 text-xl`}></i>
          </button>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedMenu(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-5 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-3 ${
                  selectedMenu === item.id
                    ? 'bg-[#F0A04B] text-white shadow-md'
                    : 'text-gray-700 hover:bg-[#FCE7C8]'
                }`}
              >
                <i className={`fas ${item.icon} text-base`}></i>
                <span>{item.id}</span>
              </button>
            ))}
            
            {/* 모바일 로그아웃 버튼 */}
            {onLogout && (
              <button
                onClick={() => {
                  onLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-5 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-3 text-red-600 hover:bg-red-50"
              >
                <i className="fas fa-sign-out-alt text-base"></i>
                <span>로그아웃</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;