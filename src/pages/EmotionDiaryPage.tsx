import React from 'react';
import { formatDate } from '../utils/dateUtils';
import { emotions } from '../data/emotions';

const EmotionDiaryPage: React.FC = () => {
  const emotionRecords = [
    {date: '2025년 6월 17일', emotion: '행복', book: '작은 습관의 힘', quote: '작은 변화가 큰 결과를 만든다'},
    {date: '2025년 6월 16일', emotion: '위로', book: '미라클모닝', quote: '아침은 하루의 시작을 결정한다'},
    {date: '2025년 6월 15일', emotion: '영감', book: '몰입', quote: '진정한 몰입은 시간을 잊게 만든다'}
  ];

  return (
    <div>
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">감정 일지</h2>
            <p className="text-gray-500">{formatDate()}</p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="week">이번 주</option>
              <option value="month">이번 달</option>
              <option value="year">올해</option>
            </select>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">감정 통계</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            {emotions.map(emotion => (
              <div key={emotion.id} className={`${emotion.color} p-4 rounded-lg`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <i className={`fas ${emotion.icon} text-xl mr-2`}></i>
                    <span>{emotion.name}</span>
                  </div>
                  <span className="text-lg font-bold">12</span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  전월 대비 <span className="text-green-600">+2</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-6">
            <h4 className="text-lg font-medium mb-4">최근 감정 기록</h4>
            <div className="space-y-4">
              {emotionRecords.map((record, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <i className="fas fa-book text-blue-500"></i>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{record.date}</span>
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                        {record.emotion}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-700">{record.quote}</p>
                    <p className="mt-1 text-sm text-gray-500">{record.book}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">월간 감정 달력</h3>
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['일', '월', '화', '수', '목', '금', '토'].map(day => (
              <div key={day} className="text-sm font-medium text-gray-500 py-2">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({length: 35}, (_, i) => (
              <div key={i} className={`aspect-square p-2 ${i >= 4 && i < 35 ? 'border rounded-lg' : ''} ${i === 20 ? 'bg-yellow-100' : ''}`}>
                {i >= 4 && i < 35 ? (
                  <div className="h-full flex flex-col items-center justify-center">
                    <span className="text-sm">{i - 3}</span>
                    {i === 20 && <i className="fas fa-smile text-yellow-500 mt-1"></i>}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionDiaryPage;
