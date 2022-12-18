import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const SpinBox: React.FC<{ score: number }> = ({ score }) => {
  const [counter, setCounter] = useState(score);

  useEffect(() => {
    setCounter(score);
  }, [score]);

  const onAddCounter = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const onSubtractCounter = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <button type="button" onClick={onAddCounter} aria-label="Arrow up">
        <AiOutlineArrowUp
          size={20}
          className="hover:text-green cursor-pointer"
        />
      </button>
      <span className="select-none">{counter}</span>
      <button type="button" onClick={onSubtractCounter} aria-label="Arrow down">
        <AiOutlineArrowDown
          size={20}
          className="hover:text-red cursor-pointer"
        />
      </button>
    </div>
  );
};

export default React.memo(SpinBox);
