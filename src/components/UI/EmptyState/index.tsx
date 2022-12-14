import React from 'react';
import { useAppSelector } from '@/lib/hooks/useRedux';

const EmptyState: React.FC<{ titleState: string }> = ({ titleState }) => {
  const { language } = useAppSelector((state) => state.ui);
  return (
    <div className="flex flex-col items-center text-center p-5 pt-14">
      <h1 className="text-primary font-bold text-base">
        {language === 'id'
          ? `Anda belum memiliki ${titleState} apapun`
          : `You hasn't ${titleState} anything`}
      </h1>
      <p className="pb-5">
        {language === 'id'
          ? `Ketika Anda melakukannya, ${titleState} Anda akan muncul di sini.`
          : `When you do, your ${titleState} will show up here.`}
      </p>
      <img
        src="pana.svg"
        alt="empty"
        className="w-full max-w-sm"
        loading="lazy"
      />
    </div>
  );
};

export default React.memo(EmptyState);
