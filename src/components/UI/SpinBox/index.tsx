import React, { useCallback, useState } from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const SpinBox = () => {
  const [counter, setCounter] = useState(0);

  const onAddCounter = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const onSubtractCounter = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, []);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default React.memo(SpinBox);
