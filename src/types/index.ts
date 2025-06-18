// 감정 타입 정의
export interface Emotion {
  id: string;
  name: string;
  icon: string;
  color: string;
}

// 독서 기록 타입 정의
export interface ReadingRecord {
  date: string;
  emotion: string;
  book: string;
  quote: string;
}

// 북마크 문장 타입 정의
export interface BookmarkSentence {
  quote: string;
  book: string;
  author: string;
  date: string;
  emotion: Emotion;
}

// 메뉴 타입 정의
export interface MenuItem {
  id: string;
  icon: string;
}
