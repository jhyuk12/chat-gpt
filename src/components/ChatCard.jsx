const ChatCard = ({ answer, question }) => {
  return (
    <li className=' flex flex-col gap-4 mb-6'>
      <div className='bg-purple-200 mx-3 p-2 self-start rounded-md drop-shadow-lg whitespace-pre-wrap '>
        GPT-Answer :{answer}
      </div>
      <div className='self-end bg-yellow-200 mr-2 p-2 rounded-md drop-shadow-lg whitespace-pre-wrap'>
        질문 : {question}
      </div>
    </li>
  );
};

export default ChatCard;
