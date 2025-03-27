import { useState } from "react";

const Chapter03Input = () => {
  // 사용자가 값을 입력할 때 마다 적절한 메시지를 화면상에 출력
  const [message, setMessage] = useState("값을 입력해주세요.");
  
  const [text, setText] = useState('');

  const inputTextHandler = (e) => {
    setText(e.target.value);

    if(e.target.value.length > 10) {
      setMessage('너무 많은 글자를 입력하셨습니다.');
      
    } else {
      setMessage('값을 입력해주세요.');
    }
  };

  return (
    <>
      <h1>값을 입력 받는 경우가 많음</h1>
      <input type="text" onChange={inputTextHandler} />
      <br />
      <span>입력값: {text}</span>
      <br />
      <span>안내메시지: {message}</span>
    </>
  );
};

export default Chapter03Input;