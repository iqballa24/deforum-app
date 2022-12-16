import React from 'react';
import { SearchBarProps } from 'lib/types';
import { MdOutlineSearch } from 'react-icons/md';

const SearchBar: React.FC<SearchBarProps> = ({ onSearchHandler, value }) => {
  return (
    <div className="relative w-full text-sm font-light text-grey-dark rounded bg-white border dark:bg-transparent dark:border dark:border-primary pl-10">
      <span className="absolute left-[20px] top-[13px]">
        <MdOutlineSearch size={20} />
      </span>
      <input
        type="text"
        placeholder="Search for a title..."
        className="w-full border-0 rounded p-3 bg-white dark:bg-transparent focus:outline-none"
        onChange={onSearchHandler}
        defaultValue={value}
      />
    </div>
  );
};

export default SearchBar;
