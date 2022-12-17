import React, { useState } from 'react';
import { WrapperCard } from '@/components/UI';

const PopularCard = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = [
    '#worldcup2022',
    '#pestaboladunia',
    '#FIFAMobileIndonesia',
    '#IndonesiaJuara',
    '#2021JadiProgrammer',
  ];

  const onSelectCategory = (category: string) => {
    if (selectedCategory === category) return setSelectedCategory('');
    setSelectedCategory(category);
  };

  return (
    <WrapperCard>
      <h1 className="font-bold mb-5 text-sm">Popular Category</h1>
      <ul className="flex flex-col space-y-3 overflow-hidden text-sm">
        {categories.map((item, index) => (
          <li
            key={index}
            className={
              selectedCategory === item
                ? 'text-primary font-bold transition-all'
                : ''
            }
          >
            <button
              type="button"
              title={item}
              onClick={onSelectCategory.bind(null, item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </WrapperCard>
  );
};

export default React.memo(PopularCard);
