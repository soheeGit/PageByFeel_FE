import React from 'react';

const RecommendationPage: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">오늘의 추천 도서</h3>
          <p className="text-gray-600">추천 기능이 곧 제공될 예정입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;
