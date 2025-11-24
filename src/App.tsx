import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import BookmarkPage from './pages/BookmarkPage';
import EmotionDiaryPage from './pages/EmotionDiaryPage';
import RecommendationPage from './pages/RecommendationPage';
import DiaryPage from './pages/DiaryPage';
import SettingsPage from './pages/SettingsPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState('홈');
  const [bookmarkInput, setBookmarkInput] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [userProfile, setUserProfile] = useState<any>(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

  const checkLoginStatus = async () => {
    try {
      const response = await fetch(`${API_URL}/api/auth/me`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success && result.data) {
          setUserProfile({
            nickname: result.data.nickname,
            email: result.data.email,
            profileImage: result.data.profileImage || 'https://via.placeholder.com/80'
          });
          setIsLoggedIn(true);
        }
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      await response.text();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoggedIn(false);
      setSelectedMenu('홈');
      
      const cookies = document.cookie.split(";");

      cookies.forEach((c) => {
        const cookieName = c.split("=")[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
      });
      
      sessionStorage.clear();
      localStorage.clear();
      
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  // 로딩 중
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  const renderContent = () => {
    switch (selectedMenu) {
      case '감정 일지':
        return <EmotionDiaryPage />;
      case '문장 보관함':
        return <BookmarkPage />;
      case '추천':
        return <RecommendationPage />;
      case '마이 다이어리':
        return <DiaryPage />;
      case '설정':
        return <SettingsPage onLogout={handleLogout} />;
      case '홈':
      default:
        return (
          <HomePage
            bookmarkInput={bookmarkInput}
            setBookmarkInput={setBookmarkInput}
            selectedEmotion={selectedEmotion}
            setSelectedEmotion={setSelectedEmotion}
            userProfile={userProfile}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation 
        selectedMenu={selectedMenu} 
        setSelectedMenu={setSelectedMenu}
        onLogout={handleLogout}
        userProfile={userProfile}
      />
      
      {/* 메인 컨텐츠 영역 */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;