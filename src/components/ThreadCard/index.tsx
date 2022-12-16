import React from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import { Label, SpinBox, AvatarImage } from '../UI';
import { truncateText } from '../../utils';

const ThreadCard: React.FC<{ shortenBody: boolean; bordered: boolean }> = ({
  shortenBody,
  bordered,
}) => {
  const string =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
  const body = shortenBody ? truncateText(string, 200) : string;

  return (
    <li
      className={`flex flex-row ${
        bordered ? 'py-6 px-4 md:py-8 md:px-6 border mt-7' : 'p-3'
      } cursor-pointer`}
    >
      <div className="w-1/12 flex flex-col justify-center items-center text-grey-light">
        <SpinBox />
      </div>
      <div className="w-11/12 flex flex-col pl-2 space-y-3">
        <Label name="#worldcup2022" />
        <h1 className="font-bold text-base overflow-hidden whitespace-nowrap truncate">
          Indonesia as Host World Cup U-20
        </h1>
        <p className="font-light pb-8 border-b">{body}</p>
        <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
          <div className="flex flex-row items-center space-x-2">
            <AvatarImage name="Iqbal Nugraha" size={24} />
            <p className="text-sm">
              Posted By <em className="text-primary">Iqbal Nugraha</em> - 2
              hours ago
            </p>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <AiOutlineComment size={20} />
            <span className="text-sm">2k</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default React.memo(ThreadCard);
