import React, { ReactElement, ReactEventHandler } from 'react';
import { motion } from 'framer-motion';
import { ButtonSwitch } from '@/components/UI';
import { dropIn } from '@/constant/transition';

import {
  MdOutlineLightMode,
  MdOutlineNightlight,
  MdOutlineGTranslate,
  MdClose,
} from 'react-icons/md';
import { RiEnglishInput } from 'react-icons/ri';

const Settings: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const switchThemeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    console.log(value);
  };

  const switchLanguageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    console.log(value);
  };

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      className="fixed left-[50%] -translate-x-2/4 z-20 w-full pt-5 pb-8 px-8 bg-white border rounded max-w-[250px]"
    >
      <h1 className="font-bold mb-4 text-center">Settings</h1>
      <div className="flex flex-row items-center space-x-5 mb-4">
        <h2 className="flex-1">Theme</h2>
        <ButtonSwitch
          isChecked={false}
          onChange={switchThemeHandler}
          icon={{
            iconLeft: MdOutlineLightMode,
            iconRight: MdOutlineNightlight,
          }}
        />
      </div>
      <div className="flex flex-row items-center space-x-5">
        <h2 className="flex-1">Language</h2>
        <ButtonSwitch
          isChecked={false}
          onChange={switchLanguageHandler}
          icon={{
            iconLeft: MdOutlineGTranslate,
            iconRight: RiEnglishInput,
          }}
        />
      </div>
      <MdClose
        size={18}
        className="absolute top-4 right-5 cursor-pointer hover:text-red"
        onClick={onClose}
      />
    </motion.div>
  );
};

export default Settings;
