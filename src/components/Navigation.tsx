import React, { useState } from 'react';
import { menuItems } from '../data/menuItems';

interface NavigationProps {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
  onLogout?: () => void;
  userProfile?: {
    nickname: string;
    email: string;
    profileImage: string;
  } | null;
}

const Navigation: React.FC<NavigationProps> = ({ selectedMenu, setSelectedMenu, onLogout, userProfile }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

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
            
            {/* 프로필 드롭다운 */}
            {userProfile && (
              <div className="relative ml-4">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
                >
                  <img
                    src={userProfile.profileImage || 'https://via.placeholder.com/40'}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover border-2 border-[#F0A04B]"
                  />
                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-semibold text-gray-900">{userProfile.nickname}</p>
                    <p className="text-xs text-gray-500">{userProfile.email}</p>
                  </div>
                  <i className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {/* 프로필 드롭다운 메뉴 */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">{userProfile.nickname}님</p>
                      <p className="text-xs text-gray-500 mt-1">{userProfile.email}</p>
                    </div>
                    <div className="px-2 py-2">
                      <button
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                          setSelectedMenu('설정');
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-3 text-gray-700"
                      >
                        <i className="fas fa-cog"></i>
                        <span>설정</span>
                      </button>
                      {onLogout && (
                        <button
                          onClick={() => {
                            setIsProfileMenuOpen(false);
                            onLogout();
                          }}
                          className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 transition-colors inline-flex items-center gap-3 text-red-600"
                        >
                          <i className="fas fa-sign-out-alt"></i>
                          <span>로그아웃</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
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
            {/* 모바일 프로필 정보 */}
            {userProfile && (
              <div className="flex items-center gap-3 px-4 py-3 mb-2 bg-[#FCE7C8] rounded-xl">
                <img
                  src={userProfile.profileImage || 'https://via.placeholder.com/40'}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#F0A04B]"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{userProfile.nickname}님</p>
                  <p className="text-xs text-gray-600">{userProfile.email}</p>
                </div>
              </div>
            )}

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