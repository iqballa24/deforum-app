import React from 'react';
import { motion } from 'framer-motion';
import { Input, Button } from '../UI';
import { dropIn } from '../../constant/transition';
import { AiOutlineClose } from 'react-icons/ai';

const FormAddThreads: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const onInputContentBody = () => {
    console.log('tester');
  };

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      className="fixed left-[50%] -translate-x-2/4 z-20 w-full flex flex-col max-w-2xl bg-white border rounded-lg overflow-hidden"
    >
      <div className="w-full flex flex-row items-center justify-between py-3 px-5 bg-orange-light">
        <span>New Thread</span>
        <AiOutlineClose
          size={16}
          className="hover:text-red cursor-pointer"
          onClick={onClose}
        />
      </div>
      <form className="w-full pt-3 pb-8 px-5 space-y-3">
        <Input placeholder="Title" type="text" />
        <Input placeholder="category" type="text" />
        <div
          id="content-body"
          contentEditable
          className="editable w-full min-h-[100px] text-sm md:text-base border-b dark:border-white p-5"
          onInput={onInputContentBody}
        ></div>
        <div className="flex justify-end">
          <Button
            type="submit"
            title="Send"
            onClick={() => console.log('oke')}
            isPrimary
          >
            Send
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default FormAddThreads;
