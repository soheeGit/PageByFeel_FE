import React from 'react';
import { emotions } from '../data/emotions';

interface EmotionSelectorProps {
  selectedEmotion: string | null;
  setSelectedEmotion: (emotion: string) => void;
}

const EmotionSelector: React.FC<EmotionSelectorProps> = ({ 
  selectedEmotion, 
  setSelectedEmotion 
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">오늘의 감정</label>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {emotions.map(emotion => (
          <button
            key={emotion.id}
            onClick={() => setSelectedEmotion(emotion.id)}
            className={`${emotion.color} ${
              selectedEmotion === emotion.id ? 'ring-2 ring-blue-500' : ''
            } p-3 rounded-lg flex flex-col items-center justify-center transition-all hover:shadow-md !rounded-button whitespace-nowrap cursor-pointer`}
          >
            <i className={`fas ${emotion.icon} text-xl mb-1`}></i>
            <span className="text-sm">{emotion.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmotionSelector;
