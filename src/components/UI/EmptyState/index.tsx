import React from 'react';

const EmptyState: React.FC<{ titleState: string }> = ({ titleState }) => {
  return (
    <div className="flex flex-col items-center text-center p-5 pt-14">
      <h1 className="text-primary font-bold text-base">You hasn&apos;t {titleState} anything</h1>
      <p className='pb-5'>When you do, your {titleState} will show up here.</p>
      <img src='pana.svg' alt='empty' className='w-full max-w-sm' loading='lazy'/>
    </div>
  );
};

export default React.memo(EmptyState);
