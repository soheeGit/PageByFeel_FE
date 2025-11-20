import React from 'react';

const LoginPage: React.FC = () => {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4">
      <div className="max-w-md w-full">
        {/* 타이틀 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            PageByFeel
          </h1>
          <p className="text-gray-600">감정과 함께하는 독서 여행</p>
        </div>

        {/* 로그인 카드 */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            로그인
          </h2>

          <div className="space-y-4">
            {/* 구글 로그인 */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:shadow-md"
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
