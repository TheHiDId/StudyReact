import { useState, useEffect } from "react";

const Chapter03B = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("메시지!");
  
  const increaseBtnHandler = () => {
    setCount((count) => count + 1);
  }

  const decreaseBtnHandler = () => {
    setCount((count) => count - 1);
  }

  useEffect(() => {
    alert(count + "가 현재 값!");
  }, [count]);

  /*
    첫 렌더링(Mount)과 재 렌더링(UPDATE) 시점에 무언가 수행하고 싶다면 useEffect Hook 사용
    [] => 첫 렌더링 시점에만 수행하고 싶음
    [state, state, state] => 각각의 state가 set될 때 마다 수행하게 하고 싶음

    Hook 관련 주의!
    - 훅은 블럭 최상위에서만 호출할 수 있음(반복, 조건, 함수 내부 호출할 수 없음)
    - 리액트 함수 컴포넌트 내부에서만 사용 가능(클래스 컴포넌트에서는 사용할 수 없음) 
  */

  return (
    <>
      <h3>{ count }</h3>
      <h3>{ message }</h3>
      <h3>
        <button onClick={increaseBtnHandler}>증가 버튼</button>
      </h3>
      <h3>
        <button onClick={decreaseBtnHandler}>감소 버튼</button>
      </h3>
    </>
  );
};

export default Chapter03B;