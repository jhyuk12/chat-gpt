import { useState } from 'react';
import { CgCloseR } from 'react-icons/cg';

const ChatSideCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickModal = () => {
    setIsOpen(true);
  };

  const onClickClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li
        className='mb-2 truncate cursor-pointer hover:font-bold'
        onClick={onClickModal}
      >
        {question}
      </li>
      {isOpen && (
        <div className='fixed top-0 left-0 bg-black bg-opacity-20 w-full h-full z-10'>
          <div className='bg-white fixed p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl'>
            <button onClick={onClickClose}>
              <CgCloseR />
            </button>
            <div className='text-lg font-bold italic'>Q. {question}</div>
            <div className='text-md'>A. {answer}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSideCard;
