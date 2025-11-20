import React, { useState } from 'react';
import { emotions } from '../data/emotions';

const EmotionDiaryPage: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState(6);

  const emotionRecords = [
    {date: '2025년 6월 17일', emotion: '행복', book: '작은 습관의 힘', quote: '작은 변화가 큰 결과를 만든다'},
    {date: '2025년 6월 16일', emotion: '위로', book: '미라클모닝', quote: '아침은 하루의 시작을 결정한다'},
    {date: '2025년 6월 15일', emotion: '영감', book: '몰입', quote: '진정한 몰입은 시간을 잊게 만든다'}
  ];

  const handlePreviousMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // 달력 생성 함수
  const generateCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay(); // 0 (일요일) ~ 6 (토요일)
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate(); // 해당 월의 총 일수
    
    const calendar = [];
    
    // 빈 칸 추가 (이전 달)
    for (let i = 0; i < firstDay; i++) {
      calendar.push({ day: null, isEmpty: true });
    }
    
    // 실제 날짜 추가
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push({ day, isEmpty: false });
    }
    
    // 6주(42칸)를 채우기 위해 나머지 빈 칸 추가
    while (calendar.length < 42) {
      calendar.push({ day: null, isEmpty: true });
    }
    
    return calendar;
  };

  const calendar = generateCalendar();
  
  // 오늘 날짜 확인 함수
  const isToday = (day: number | null) => {
    if (!day) return false;
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() + 1 &&
      currentYear === today.getFullYear()
    );
  };

  // 임시 감정 데이터 (나중에 실제 데이터로 교체)
  const emotionData: { [key: number]: string } = {
    17: 'happy',
    16: 'comfort',
    15: 'inspired',
    20: 'happy'
  };

  const getEmotionIcon = (emotionId: string) => {
    const emotion = emotions.find(e => e.id === emotionId);
    return emotion ? emotion.icon : '';
  };

  return (
    <div>
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
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={handlePreviousMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <i className="fas fa-chevron-left text-gray-600"></i>
            </button>
            <h3 className="text-lg font-bold">{currentYear}년 {currentMonth}월</h3>
            <button 
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <i className="fas fa-chevron-right text-gray-600"></i>
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['일', '월', '화', '수', '목', '금', '토'].map(day => (
              <div key={day} className="text-sm font-medium text-gray-500 py-2">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {calendar.map((item, index) => (
              <div 
                key={index} 
                className={`aspect-square p-2 ${
                  !item.isEmpty ? 'border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors' : ''
                } ${
                  isToday(item.day) ? 'border-2 border-blue-500' : ''
                } ${
                  item.day && emotionData[item.day] ? 'bg-yellow-50' : ''
                }`}
              >
                {!item.isEmpty && item.day && (
                  <div className="h-full flex flex-col items-center justify-center">
                    <span className={`text-sm ${
                      isToday(item.day) ? 'font-bold text-blue-600' : 'text-gray-700'
                    }`}>
                      {item.day}
                    </span>
                    {emotionData[item.day] && (
                      <i className={`fas ${getEmotionIcon(emotionData[item.day])} text-yellow-500 text-xs mt-1`}></i>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionDiaryPage;
