import type {Emotion} from '../types';

// 감정 옵션 데이터
export const emotions: Emotion[] = [
  { id: 'happy', name: '행복', icon: 'fa-smile', color: 'bg-yellow-100' },
  { id: 'comfort', name: '위로', icon: 'fa-heart', color: 'bg-pink-100' },
  { id: 'excited', name: '흥분', icon: 'fa-bolt', color: 'bg-purple-100' },
  { id: 'sad', name: '슬픔', icon: 'fa-sad-tear', color: 'bg-blue-100' },
  { id: 'bored', name: '지루함', icon: 'fa-meh', color: 'bg-gray-100' },
  { id: 'inspired', name: '영감', icon: 'fa-lightbulb', color: 'bg-amber-100' },
];
