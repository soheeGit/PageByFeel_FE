// 현재 날짜 포맷팅
export const formatDate = (): string => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  };
  return today.toLocaleDateString('ko-KR', options);
};
