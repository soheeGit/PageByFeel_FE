import React from 'react';
import { formatDate } from '../utils/dateUtils';

const BookmarkPage: React.FC = () => {
  const bookmarkSentences = [
    {
      quote: "당신이 하루에 읽는 한 페이지가 모여 당신의 인생을 바꿀 책이 됩니다. 꾸준함이 만드는 기적을 믿으세요.",
      book: "작은 습관의 힘",
      author: "제임스 클리어",
      date: "2025년 6월 17일",
      emotion: { name: "영감", icon: "fa-lightbulb", color: "purple" }
    },
    {
      quote: "우리는 모두 각자의 이야기를 쓰고 있습니다. 오늘 당신이 읽은 한 페이지는 내일의 당신을 만듭니다.",
      book: "미라클모닝",
      author: "할 엘로드",
      date: "2025년 6월 16일",
      emotion: { name: "위로", icon: "fa-heart", color: "pink" }
    },
    {
      quote: "작은 변화가 큰 결과를 만든다. 하루에 1%씩 개선하면 1년 후에는 37배 더 나아진다.",
      book: "작은 습관의 힘",
      author: "제임스 클리어",
      date: "2025년 6월 15일",
      emotion: { name: "행복", icon: "fa-smile", color: "yellow" }
    }
  ];

  return (
    <div>
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">문장 보관함</h2>
            <p className="text-gray-500">{formatDate()}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="문장 검색..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">모든 감정</option>
              <option value="happy">행복</option>
              <option value="comfort">위로</option>
              <option value="excited">흥분</option>
              <option value="sad">슬픔</option>
              <option value="bored">지루함</option>
              <option value="inspired">영감</option>
            </select>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 문장 카드 */}
        {bookmarkSentences.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <img
                  src={`https://readdy.ai/api/search-image?query=minimalist%20book%20cover%20design%20with%20abstract%20geometric%20patterns%20in%20soft%20pastel%20colors%20perfect%20for%20modern%20literature&width=40&height=60&seq=${index + 1}&orientation=portrait`}
                  alt="Book cover"
                  className="w-10 h-15 object-cover rounded mr-3"
                />
                <div>
                  <h4 className="font-medium">{item.book}</h4>
                  <p className="text-sm text-gray-500">{item.author}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-gray-400 hover:text-blue-600 transition-colors">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="text-gray-400 hover:text-red-600 transition-colors">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <i className="fas fa-quote-left text-gray-300 mr-2"></i>
              {item.quote}
              <i className="fas fa-quote-right text-gray-300 ml-2"></i>
            </p>
            <div className="flex justify-between items-center">
              <span className={`bg-${item.emotion.color}-100 text-${item.emotion.color}-700 px-3 py-1 rounded-full text-xs`}>
                <i className={`fas ${item.emotion.icon} mr-1`}></i>
                {item.emotion.name}
              </span>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkPage;
