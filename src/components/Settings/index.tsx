import React from 'react';
import { motion } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '@/lib/hooks/useRedux';
import { RiEnglishInput } from 'react-icons/ri';
import {
  MdClose,
  MdOutlineLightMode,
  MdOutlineNightlight,
  MdOutlineGTranslate,
} from 'react-icons/md';
import { ButtonSwitch } from '@/components/UI';
import { dropIn } from '@/constant/transition';
import { uiActions } from '@/store/ui';

const Settings: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const { isDarkMode, language } = useAppSelector(
    (state) => state.ui
  );

  const switchThemeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (checked) {
      localStorage.setItem('darkMode', 'dark');
    } else {
      localStorage.removeItem('darkMode');
    }

    dispatch(uiActions.toggleTheme(checked));
  };

  const switchLanguageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (checked) {
      localStorage.setItem('language', 'id');
    } else {
      localStorage.setItem('language', 'en');
    }

    dispatch(uiActions.toggleLanguage(checked ? 'id': 'en'));
  };

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      className="fixed left-[50%] -translate-x-2/4 z-20 w-full pt-5 pb-8 px-8 bg-white dark:bg-bg-dark border rounded max-w-[250px]"
    >
      <h1 className="font-bold mb-4 text-center">
        {language === 'id' ? 'Pengaturan' : 'Settings'}
      </h1>
      <div className="flex flex-row items-center space-x-5 mb-4">
        <h2 className="flex-1">{language === 'id' ? 'Tema' : 'Theme'}</h2>
        <ButtonSwitch
          isChecked={isDarkMode}
          onChange={switchThemeHandler}
          icon={{
            iconLeft: MdOutlineLightMode,
            iconRight: MdOutlineNightlight,
          }}
        />
      </div>
      <div className="flex flex-row items-center space-x-5">
        <h2 className="flex-1">
          {language === 'id' ? 'Bahasa' : 'Language'}
        </h2>
        <ButtonSwitch
          isChecked={language === 'id'}
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
