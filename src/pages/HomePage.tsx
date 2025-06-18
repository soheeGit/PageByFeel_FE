import React from 'react';
import { formatDate } from '../utils/dateUtils';
import { emotions } from '../data/emotions';
import EmotionChart from '../components/EmotionChart';
import EmotionSelector from '../components/EmotionSelector';

interface HomePageProps {
  bookmarkInput: string;
  setBookmarkInput: (input: string) => void;
  selectedEmotion: string | null;
  setSelectedEmotion: (emotion: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  bookmarkInput,
  setBookmarkInput,
  selectedEmotion,
  setSelectedEmotion
}) => {
  return (
    <>
      {/* 헤더 */}
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">홈</h2>
            <p className="text-gray-500">{formatDate()}</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-bell text-gray-500"></i>
            </button>
            <button className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-search text-gray-500"></i>
            </button>
          </div>
        </div>
      </header>
      
      {/* 홈 화면 컨텐츠 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 어제의 기록 */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-bold">어제의 기록</h3>
              <div className="flex items-center mt-1">
                <img src="https://readdy.ai/api/search-image?query=minimalist%20book%20cover%20design%20with%20abstract%20geometric%20patterns%20in%20soft%20pastel%20colors%20perfect%20for%20modern%20literature&width=40&height=60&seq=1&orientation=portrait"
                     alt="Book cover"
                     className="w-8 h-12 object-cover rounded mr-2"
                />
                <div>
                  <p className="text-sm font-medium">작은 습관의 힘</p>
                  <p className="text-xs text-gray-500">3페이지 / 10페이지</p>
                </div>
              </div>
            </div>
            <span className="text-sm text-gray-500">2025년 6월 17일</span>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <p className="text-gray-700 leading-relaxed">
              <i className="fas fa-quote-left text-blue-300 mr-2"></i>
              어제는 '작은 습관의 힘'에서 습관 형성의 중요성에 대해 읽었습니다. 특히 '작은 변화가 큰 결과를 만든다'는 문장이 인상적이었습니다. 하루에 1%씩 개선하면 1년 후에는 37배 더 나아진다는 개념이 흥미로웠습니다.
              <i className="fas fa-quote-right text-blue-300 ml-2"></i>
            </p>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs mr-2">
              <i className="fas fa-smile mr-1"></i> 행복
            </span>
            <span>책: 작은 습관의 힘 (제임스 클리어)</span>
          </div>
        </div>
        
        {/* 주간 통계 */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold mb-4">주간 감정 흐름</h3>
          <EmotionChart />
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">이번 주 독서</p>
                <p className="text-2xl font-bold">7 페이지</p>
              </div>
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                <i className="fas fa-arrow-up mr-1"></i> 목표 달성
              </div>
            </div>
          </div>
        </div>
        
        {/* 오늘의 독서 */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">오늘의 독서</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">현재 독서 진행률:</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full">
                  <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-500 ml-2">3/10일</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">책 선택</label>
              <div className="relative">
                <button
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-left flex items-center justify-between focus:ring-2 focus:ring-blue-500 focus:border-blue-500 !rounded-button"
                  onClick={() => document.getElementById('bookDropdown')?.classList.toggle('hidden')}
                >
                  <span className="flex items-center">
                    <img src="https://readdy.ai/api/search-image?query=minimalist%20book%20cover%20design%20with%20abstract%20geometric%20patterns%20in%20soft%20pastel%20colors%20perfect%20for%20modern%20literature&width=40&height=60&seq=1&orientation=portrait"
                         alt="Book cover"
                         className="w-10 h-15 object-cover rounded mr-3"
                    />
                    <span>작은 습관의 힘</span>
                  </span>
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </button>
                <div id="bookDropdown" className="hidden absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="p-2">
                    <input type="text" placeholder="책 검색..." className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2" />
                    <div className="max-h-48 overflow-y-auto">
                      {['작은 습관의 힘', '아주 작은 습관의 힘', '원씽', '몰입', '미라클모닝'].map((book, index) => (
                        <div key={index} className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
                          <img src={`https://readdy.ai/api/search-image?query=minimalist%20book%20cover%20design%20with%20abstract%20geometric%20patterns%20in%20soft%20pastel%20colors%20perfect%20for%20modern%20literature&width=40&height=60&seq=${index + 2}&orientation=portrait`}
                               alt="Book cover"
                               className="w-10 h-15 object-cover rounded mr-3"
                          />
                          <span>{book}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">읽기 기간 설정</label>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <input
                    type="number"
                    min="1"
                    max="365"
                    defaultValue="10"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <span className="text-gray-500">일</span>
                <button className="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap">
                  기간 설정
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                <i className="fas fa-info-circle mr-1"></i>
                하루에 한 페이지씩 읽을 수 있도록 기간을 설정해주세요.
              </p>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">오늘 읽은 내용 요약</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              rows={4}
              placeholder="오늘 읽은 내용을 간략히 요약해보세요..."
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">인상 깊은 문장 북마크</label>
            <div className="flex">
              <input
                type="text"
                className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="인상 깊었던 문장을 기록하세요..."
                value={bookmarkInput}
                onChange={(e) => setBookmarkInput(e.target.value)}
              />
              <button className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                <i className="fas fa-plus mr-2"></i> 추가
              </button>
            </div>
          </div>
          <div className="mb-6">
            <EmotionSelector 
              selectedEmotion={selectedEmotion}
              setSelectedEmotion={setSelectedEmotion}
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-save mr-2"></i> 저장하기
            </button>
          </div>
        </div>
        
        {/* 추천 문장 */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">오늘의 추천 문장</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              <i className="fas fa-sync-alt mr-1"></i> 새로고침
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                <i className="fas fa-quote-left text-purple-300 mr-2"></i>
                당신이 하루에 읽는 한 페이지가 모여 당신의 인생을 바꿀 책이 됩니다. 꾸준함이 만드는 기적을 믿으세요.
                <i className="fas fa-quote-right text-purple-300 ml-2"></i>
              </p>
              <div className="mt-3 text-sm text-gray-500">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs mr-2">
                  <i className="fas fa-lightbulb mr-1"></i> 영감
                </span>
              </div>
            </div>
            <div className="bg-pink-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                <i className="fas fa-quote-left text-pink-300 mr-2"></i>
                우리는 모두 각자의 이야기를 쓰고 있습니다. 오늘 당신이 읽은 한 페이지는 내일의 당신을 만듭니다.
                <i className="fas fa-quote-right text-pink-300 ml-2"></i>
              </p>
              <div className="mt-3 text-sm text-gray-500">
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs mr-2">
                  <i className="fas fa-heart mr-1"></i> 위로
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
