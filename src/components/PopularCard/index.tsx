import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/useRedux';
import { WrapperCard } from '@/components/UI';
import { uiActions } from '@/store/ui';

const PopularCard = () => {
  const dispatch = useAppDispatch();
  const { ui, category } = useAppSelector((state) => state);
  const [selectedCategory, setSelectedCategory] = useState('');

  const onSelectCategory = (category: string) => {
    if (selectedCategory === category) return setSelectedCategory('');
    setSelectedCategory(category);
  };

  useEffect(() => {
    dispatch(uiActions.changeCategory(selectedCategory.replace('#','')));
  }, [selectedCategory]);

  return (
    <WrapperCard>
      <h1 className="font-bold mb-5 text-sm">
        {ui.language === 'id' ? 'Kategori Populer' : 'Popular Category'}
      </h1>
      <ul className="flex flex-col space-y-3 overflow-hidden text-sm">
        {category.data.map((item, index) => (
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
              #{item}
            </button>
          </li>
        ))}
      </ul>
    </WrapperCard>
  );
};

export default React.memo(PopularCard);
