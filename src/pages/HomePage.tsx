import React from 'react';
import EmotionChart from '../components/EmotionChart';
import EmotionSelector from '../components/EmotionSelector';

interface HomePageProps {
  bookmarkInput: string;
  setBookmarkInput: (input: string) => void;
  selectedEmotion: string | null;
  setSelectedEmotion: (emotion: string) => void;
  userProfile: {
    nickname: string;
    email: string;
    profileImage: string;
  } | null;
}

interface UserProfile {
  nickname: string;
  email: string;
  profileImage: string;
}

const HomePage: React.FC<HomePageProps> = ({
  bookmarkInput,
  setBookmarkInput,
  selectedEmotion,
  setSelectedEmotion,
  userProfile
}) => {

  return (
    <div className="space-y-8">
      {/* 사용자 프로필 헤더 */}
      <div className="bg-[#FADA7A] rounded-2xl shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* 사용자 정보 */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {userProfile?.nickname}님, 환영합니다! 👋
            </h2>
            <p className="text-gray-700">{userProfile?.email || ''}</p>
          </div>

          {/* 간단한 통계 */}
          <div className="flex gap-4">
            <div className="bg-white rounded-xl px-6 py-4 text-center shadow-md">
              <p className="text-sm text-gray-600 mb-1">총 독서일</p>
              <p className="text-2xl font-bold text-[#F0A04B]">7일</p>
            </div>
            <div className="bg-white rounded-xl px-6 py-4 text-center shadow-md">
              <p className="text-sm text-gray-600 mb-1">완독한 책</p>
              <p className="text-2xl font-bold text-[#B1C29E]">2권</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 메인 컨텐츠 그리드 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 어제의 기록 */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📖 어제의 기록</h3>
              <div className="flex items-center gap-3">
                <img 
                  src="https://readdy.ai/api/search-image?query=minimalist%20book%20cover%20design%20with%20abstract%20geometric%20patterns%20in%20soft%20pastel%20colors%20perfect%20for%20modern%20literature&width=40&height=60&seq=1&orientation=portrait"
                  alt="Book cover"
                  className="w-12 h-16 object-cover rounded-lg shadow-sm"
                />
                <div>
                  <p className="text-base font-semibold text-gray-900">작은 습관의 힘</p>
                  <p className="text-sm text-gray-500 mt-1">
                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-medium">
                      3 / 10 페이지
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <span className="text-sm text-gray-400 whitespace-nowrap">2025년 6월 17일</span>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
            <p className="text-gray-700 leading-relaxed">
              <i className="fas fa-quote-left text-blue-300 mr-2"></i>
              어제는 '작은 습관의 힘'에서 습관 형성의 중요성에 대해 읽었습니다. 특히 '작은 변화가 큰 결과를 만든다'는 문장이 인상적이었습니다. 하루에 1%씩 개선하면 1년 후에는 37배 더 나아진다는 개념이 흥미로웠습니다.
              <i className="fas fa-quote-right text-blue-300 ml-2"></i>
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium inline-flex items-center gap-2">
              <i className="fas fa-smile"></i> 행복
            </span>
            <span className="text-gray-500">책: 작은 습관의 힘 (제임스 클리어)</span>
          </div>
        </div>
        
        {/* 주간 통계 */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">📊 주간 감정 흐름</h3>
          <EmotionChart />
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500 mb-1">이번 주 독서</p>
                <p className="text-3xl font-bold text-gray-900">7 <span className="text-lg text-gray-500">페이지</span></p>
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                <i className="fas fa-check-circle"></i> 달성
              </div>
            </div>
          </div>
        </div>
        
        {/* 오늘의 독서 */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h3 className="text-xl font-bold text-gray-900">✨ 오늘의 독서</h3>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <span className="text-sm text-gray-500 whitespace-nowrap">현재 진행률:</span>
              <div className="flex items-center gap-3 flex-1 sm:flex-initial">
                <div className="w-32 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#F0A04B] rounded-full"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">3/10일</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* 책 선택 */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-3">📚 책 선택</label>
              <div className="relative">
                <button
                  className="w-full bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 rounded-xl px-4 py-3.5 text-left flex items-center justify-between focus:ring-2 focus:ring-[#F0A04B] focus:border-[#F0A04B] transition-all duration-200"
                  onClick={() => document.getElementById('bookDropdown')?.classList.toggle('hidden')}
                >
                  <span className="flex items-center gap-3">
                    <img 
                      src="https://readdy.ai/api/search-image?query=minimalist%20book%20cover%20design%20with%20abstract%20geometric%20patterns%20in%20soft%20pastel%20colors%20perfect%20for%20modern%20literature&width=40&height=60&seq=1&orientation=portrait"
                      alt="Book cover"
                      className="w-10 h-14 object-cover rounded-lg shadow-sm"
                    />
                    <span className="font-medium text-gray-900">작은 습관의 힘</span>
                  </span>
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </button>
                <div id="bookDropdown" className="hidden absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl">
                  <div className="p-3">
                    <input 
                      type="text" 
                      placeholder="책 검색..." 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2 focus:ring-2 focus:ring-[#F0A04B] focus:border-[#F0A04B]" 
                    />
                    <div className="max-h-48 overflow-y-auto">
                      {['작은 습관의 힘', '아주 작은 습관의 힘', '원씽', '몰입', '미라클모닝'].map((book, index) => (
                        <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                          <img 
                            src={`https://readdy.ai/api/search-image?query=minimalist%20book%20cover%20design%20with%20abstract%20geometric%20patterns%20in%20soft%20pastel%20colors%20perfect%20for%20modern%20literature&width=40&height=60&seq=${index + 2}&orientation=portrait`}
                            alt="Book cover"
                            className="w-10 h-14 object-cover rounded-lg mr-3 shadow-sm"
                          />
                          <span className="font-medium text-gray-700">{book}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 읽기 기간 설정 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">⏰ 읽기 기간 설정</label>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <input
                    type="number"
                    min="1"
                    max="365"
                    defaultValue="10"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F0A04B] focus:border-[#F0A04B] transition-all duration-200"
                  />
                </div>
                <span className="text-gray-500 font-medium">일</span>
                <button className="bg-[#F0A04B] hover:bg-[#e08f3a] text-white px-6 py-3.5 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200">
                  설정
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3 flex items-start gap-2">
                <i className="fas fa-info-circle mt-0.5"></i>
                <span>하루에 한 페이지씩 읽을 수 있도록 기간을 설정해주세요.</span>
              </p>
            </div>
          </div>
          
          {/* 오늘 읽은 내용 요약 */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">✍️ 오늘 읽은 내용 요약</label>
            <textarea
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F0A04B] focus:border-[#F0A04B] transition-all duration-200 resize-none"
              rows={5}
              placeholder="오늘 읽은 내용을 간략히 요약해보세요..."
            ></textarea>
          </div>
          
          {/* 인상 깊은 문장 북마크 */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">💬 인상 깊은 문장 북마크</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F0A04B] focus:border-[#F0A04B] transition-all duration-200"
                placeholder="인상 깊었던 문장을 기록하세요..."
                value={bookmarkInput}
                onChange={(e) => setBookmarkInput(e.target.value)}
              />
              <button className="bg-[#F0A04B] hover:bg-[#e08f3a] text-white px-6 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2">
                <i className="fas fa-plus"></i> 추가
              </button>
            </div>
          </div>
          
          {/* 감정 선택 */}
          <div className="mb-8">
            <EmotionSelector 
              selectedEmotion={selectedEmotion}
              setSelectedEmotion={setSelectedEmotion}
            />
          </div>
          
          {/* 저장 버튼 */}
          <div className="flex justify-end">
            <button className="bg-[#B1C29E] hover:bg-[#9BB088] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center gap-3">
              <i className="fas fa-save"></i> 저장하기
            </button>
          </div>
        </div>
        
        {/* 오늘의 추천 문장 */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h3 className="text-xl font-bold text-gray-900">💡 오늘의 추천 문장</h3>
            <button className="text-sm text-[#F0A04B] hover:text-[#F0A04B] font-medium transition-colors inline-flex items-center gap-2">
              <i className="fas fa-sync-alt"></i> 새로고침
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FCE7C8] rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                <i className="fas fa-quote-left text-[#F0A04B] mr-2"></i>
                당신이 하루에 읽는 한 페이지가 모여 당신의 인생을 바꿀 책이 됩니다. 꾸준함이 만드는 기적을 믿으세요.
                <i className="fas fa-quote-right text-[#F0A04B] ml-2"></i>
              </p>
              <div className="flex items-center gap-2">
                <span className="bg-[#F0A04B] bg-opacity-20 text-[#F0A04B] px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                  <i className="fas fa-lightbulb"></i> 영감
                </span>
              </div>
            </div>
            <div className="bg-[#B1C29E] rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <p className="text-white leading-relaxed mb-4">
                <i className="fas fa-quote-left text-white mr-2"></i>
                우리는 모두 각자의 이야기를 쓰고 있습니다. 오늘 당신이 읽은 한 페이지는 내일의 당신을 만듭니다.
                <i className="fas fa-quote-right text-white ml-2"></i>
              </p>
              <div className="flex items-center gap-2">
                <span className="bg-white bg-opacity-30 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                  <i className="fas fa-heart"></i> 위로
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
