import React from 'react';
import { emotions } from '../data/emotions';

interface EmotionSelectorProps {
  selectedEmotion: string | null;
  setSelectedEmotion: (emotion: string) => void;
}

const EmotionSelector: React.FC<EmotionSelectorProps> = ({
  selectedEmotion,
  setSelectedEmotion,
}) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        😊 오늘의 감정을 선택해주세요
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {emotions.map((emotion) => (
          <button
            key={emotion.id}
            onClick={() => setSelectedEmotion(emotion.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
              selectedEmotion === emotion.id
                ? `${emotion.color} border-current shadow-md`
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <i className={`fas ${emotion.icon} text-2xl ${
                selectedEmotion === emotion.id ? 'text-gray-700' : 'text-gray-400'
              }`}></i>
              <span className={`text-sm font-medium ${
                selectedEmotion === emotion.id ? 'text-gray-900' : 'text-gray-600'
              }`}>
                {emotion.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmotionSelector;
