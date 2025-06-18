import React from 'react';
import { formatDate } from '../utils/dateUtils';

const DiaryPage: React.FC = () => {
  return (
    <div>
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">마이 다이어리</h2>
            <p className="text-gray-500">{formatDate()}</p>
          </div>
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">나의 독서 일기</h3>
          <p className="text-gray-600">다이어리 기능이 곧 제공될 예정입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default DiaryPage;
