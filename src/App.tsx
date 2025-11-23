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

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

  const checkLoginStatus = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        credentials: 'include', // 쿠키 포함
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsLoggedIn(true);
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

  // 초기 로그인 상태 확인
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // 주기적으로 로그인 상태 확인 (선택적)
  useEffect(() => {
    const interval = setInterval(() => {
      checkLoginStatus();
    }, 60000); // 1분마다 체크

    return () => clearInterval(interval);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      setIsLoggedIn(false);
      setSelectedMenu('홈');
    } catch (error) {
      console.error(error);
      setIsLoggedIn(false);
      setSelectedMenu('홈');
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