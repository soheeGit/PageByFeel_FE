import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/api/oauth2/authorization/google`;
  };

  const handleKakaoLogin = () => {
    window.location.href = `${API_URL}/api/oauth2/authorization/kakao`;
  };

  const handleNaverLogin = () => {
    window.location.href = `${API_URL}/api/oauth2/authorization/naver`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FCE7C8] via-[#FADA7A] to-[#F0A04B] px-4">
      <div className="max-w-md w-full">
        {/* 로그인 카드 */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          {/* 로고 */}
          <div className="flex justify-center mb-4">
            <img 
              src="/pagebyfeel_logo.png" 
              alt="PageByFeel Logo" 
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* 서브 타이틀 */}
          <div className="text-center mb-8">
            <p className="text-gray-600 text-base">감정과 함께하는 독서 여행</p>
          </div>

          <div className="space-y-4">
            {/* 구글 로그인 */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-20 transition-all duration-200 hover:shadow-md"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Google로 계속하기</span>
            </button>

            {/* 카카오 로그인 */}
            <button
              onClick={handleKakaoLogin}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#FEE500] rounded-xl font-semibold text-[#000000] hover:bg-[#FDD835] transition-all duration-200 hover:shadow-md"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#000000"
                  d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.8 6.7l-1.2 4.4c-.1.5.3.9.8.6l5.4-3.6c.4.1.8.1 1.2.1 5.5 0 10-3.6 10-8S17.5 3 12 3z"
                />
              </svg>
              <span>카카오로 계속하기</span>
            </button>

            {/* 네이버 로그인 */}
            <button
              onClick={handleNaverLogin}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#03C75A] rounded-xl font-semibold text-white hover:bg-[#02B350] transition-all duration-200 hover:shadow-md"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z" />
              </svg>
              <span>네이버로 계속하기</span>
            </button>
          </div>

          {/* 약관 동의 안내 */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              로그인하면{' '}
              <button 
                onClick={() => setShowTermsModal(true)}
                className="text-[#F0A04B] hover:text-[#F0A04B] underline font-medium"
              >
                이용약관
              </button>
              과{' '}
              <button 
                onClick={() => setShowPrivacyModal(true)}
                className="text-[#F0A04B] hover:text-[#F0A04B] underline font-medium"
              >
                개인정보처리방침
              </button>
              에<br />동의하게 됩니다
            </p>
          </div>
        </div>
      </div>

      {/* 이용약관 모달 */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">이용약관</h2>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-4 text-sm text-gray-700">
                <section>
                  <h3 className="font-bold text-lg mb-2">제1조 (목적)</h3>
                  <p>본 약관은 PageByFeel(이하 "회사")이 제공하는 감정 기반 독서 추천 서비스(이하 "서비스")의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">제2조 (정의)</h3>
                  <p>1. "서비스"란 회원이 자신의 감정 상태를 기록하고 그에 맞는 도서를 추천받는 플랫폼을 의미합니다.</p>
                  <p>2. "회원"이란 본 약관에 동의하고 회사가 제공하는 서비스를 이용하는 자를 말합니다.</p>
                  <p>3. "콘텐츠"란 회원이 서비스에 게시한 감정 기록, 독서 기록, 북마크 등의 정보를 의미합니다.</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">제3조 (약관의 효력 및 변경)</h3>
                  <p>1. 본 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생합니다.</p>
                  <p>2. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.</p>
                  <p>3. 약관이 변경되는 경우 회사는 변경사항을 시행일자 7일 전부터 공지합니다.</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">제4조 (서비스의 제공)</h3>
                  <p>1. 회사는 다음과 같은 서비스를 제공합니다:</p>
                  <p className="ml-4">- 감정 기록 및 분석 서비스</p>
                  <p className="ml-4">- 감정 기반 도서 추천 서비스</p>
                  <p className="ml-4">- 독서 일기 작성 및 관리 서비스</p>
                  <p className="ml-4">- 도서 북마크 및 관심 목록 관리 서비스</p>
                  <p>2. 서비스는 연중무휴 1일 24시간 제공함을 원칙으로 합니다. 다만, 시스템 점검 등 필요한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">제5조 (회원의 의무)</h3>
                  <p>1. 회원은 다음 행위를 하여서는 안 됩니다:</p>
                  <p className="ml-4">- 타인의 정보 도용</p>
                  <p className="ml-4">- 회사의 서비스 정보를 이용한 영리 행위</p>
                  <p className="ml-4">- 외설 또는 폭력적인 메시지, 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위</p>
                  <p className="ml-4">- 회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위</p>
                  <p>2. 회원은 관계 법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항을 준수해야 합니다.</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">제6조 (서비스 이용의 제한 및 중지)</h3>
                  <p>회사는 회원이 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다.</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">제7조 (면책조항)</h3>
                  <p>1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
                  <p>2. 회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</p>
                  <p>3. 회사는 회원이 서비스를 통해 얻은 정보나 자료 등으로 인한 손해에 대하여 책임을 지지 않습니다.</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">제8조 (분쟁해결)</h3>
                  <p>1. 회사는 회원이 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</p>
                  <p>2. 회사와 회원 간 발생한 분쟁에 관한 소송은 민사소송법상의 관할법원에 제소합니다.</p>
                </section>

                <section className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-gray-500 text-xs">본 약관은 2025년 1월 1일부터 시행됩니다.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 개인정보처리방침 모달 */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">개인정보처리방침</h2>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-4 text-sm text-gray-700">
                <section>
                  <h3 className="font-bold text-lg mb-2">1. 개인정보의 수집 및 이용 목적</h3>
                  <p>PageByFeel(이하 "페이지바이필")은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                  <p className="mt-2">- 회원 가입 및 관리: 회원 식별, 서비스 부정이용 방지</p>
                  <p>- 서비스 제공: 감정 기록, 도서 추천, 독서 일기 관리</p>
                  <p>- 서비스 개선: 맞춤형 서비스 제공, 통계학적 분석</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">2. 수집하는 개인정보의 항목</h3>
                  <p>회사는 회원가입 시 소셜 로그인을 통해 다음의 개인정보를 수집합니다:</p>
                  <p className="mt-2"><strong>[필수 정보]</strong></p>
                  <p>- 소셜 계정 정보: 이름, 이메일, 프로필 이미지</p>
                  <p>- 서비스 이용 기록: 감정 기록, 독서 기록, 북마크 정보</p>
                  <p className="mt-2"><strong>[자동 수집 정보]</strong></p>
                  <p>- 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보, 기기 정보</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">3. 개인정보의 처리 및 보유 기간</h3>
                  <p>1. 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                  <p>2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다:</p>
                  <p className="ml-4">- 회원 정보: 회원 탈퇴 시까지</p>
                  <p className="ml-4">- 서비스 이용 기록: 회원 탈퇴 후 30일</p>
                  <p className="ml-4">- 부정 이용 기록: 부정 이용 발생일로부터 1년</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">4. 개인정보의 제3자 제공</h3>
                  <p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:</p>
                  <p className="ml-4">- 이용자가 사전에 동의한 경우</p>
                  <p className="ml-4">- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">5. 개인정보의 파기 절차 및 방법</h3>
                  <p>1. 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</p>
                  <p>2. 파기 절차:</p>
                  <p className="ml-4">- 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.</p>
                  <p>3. 파기 방법:</p>
                  <p className="ml-4">- 전자적 파일 형태: 복구 불가능한 방법으로 영구 삭제</p>
                  <p className="ml-4">- 종이 문서: 분쇄기로 분쇄하거나 소각</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">6. 정보주체의 권리·의무 및 행사방법</h3>
                  <p>이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다:</p>
                  <p className="ml-4">- 개인정보 열람 요구</p>
                  <p className="ml-4">- 오류 등이 있을 경우 정정 요구</p>
                  <p className="ml-4">- 삭제 요구</p>
                  <p className="ml-4">- 처리정지 요구</p>
                  <p className="mt-2">권리 행사는 서비스 내 설정 메뉴 또는 고객센터를 통해 하실 수 있습니다.</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">7. 개인정보 보호책임자</h3>
                  <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제를 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                  <p className="mt-2"><strong>개인정보 보호책임자</strong></p>
                  <p>- 이메일: 63wlsthgml@gmail.com</p>
                  <p>- 문의: 서비스 내 고객센터</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">8. 개인정보의 안전성 확보조치</h3>
                  <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
                  <p className="ml-4">- 관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</p>
                  <p className="ml-4">- 기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 개인정보의 암호화, 보안프로그램 설치</p>
                  <p className="ml-4">- 물리적 조치: 전산실, 자료보관실 등의 접근통제</p>
                </section>

                <section>
                  <h3 className="font-bold text-lg mb-2">9. 개인정보 처리방침의 변경</h3>
                  <p>이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
                </section>

                <section className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-gray-500 text-xs">본 방침은 2025년 1월 1일부터 시행됩니다.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
