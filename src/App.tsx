import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import BookmarkPage from './pages/BookmarkPage';
import EmotionDiaryPage from './pages/EmotionDiaryPage';
import RecommendationPage from './pages/RecommendationPage';
import DiaryPage from './pages/DiaryPage';
import SettingsPage from './pages/SettingsPage';

const App: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState('홈');
  const [bookmarkInput, setBookmarkInput] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

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
        return <SettingsPage />;
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
