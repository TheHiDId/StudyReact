import { useState } from "react";

/*
  컴포넌트 내부에서 변경이 가능한 데이터값을 관리해야할 경우

  props는 불변 객체이기 때문에 건드리면 안 됨

  리액트에서 화면에 표시하는 데이터, 변화해야하는 값, 상태 등은 모두 State를 이용해서 관리함
  예시) 버튼을 클릭했는가? / 값이 null인가? / 숫자값이 증가했는가? / 배열에 요소가 추가되었나? 등등

  함수형 컴포넌트는 State를 관리하기 위해서 useState라는 Hook을 사용함
*/

const Chapter03 = () => {
  // let count = 0;
  const [count, setCount] = useState(0); // <- 얘가 Hook
  // useState 호출 시 두 개의 반환값이 존재하는데, 인자값으로 전달한 값이 대입되어있는 변수, 변수값을 조작할 수 있는 setter
  // State라는 것을 이용해서 값을 사용해야 함을 명심할 것
  // useState는 반드시 호출할 때 인자값을 전달해야 함 -> 초기값
  // 인자값은 모든 종류의 자료형이 다 들어갈 수 있음

  const countBtn = () => {
    setCount((count) => count + 1);
  }

  /*
    버튼을 클릭했을 때 setter 함수를 이용해서 State값을 변경했더니 화면을 새로고침하지 않더라도 수치가 바뀌고 화면이 변경 됨

    이를 컴포넌트가 재렌더링 되었다 라고 함

    함수형 컴포넌트는 내가 가지고 있는 State가 setter가 이용되어 변경이 일어났을 때 함수를 다시 호출 함

    리액트는 가상 DOM을 사용하여 변경된 부분만 실제 DOM에 반영하여 효율성을 높임

    State에 변동이 생겼네? -> 함수 컴포넌트 다시 실행! -> 실제 DOM과 가상 DOM 비교! -> 바뀐 부분만 재렌더링 -> 반복...

    리액트의 재렌더링 조건
    1. setter를 이용한 state의 변경
    2. props값이 변경
    3. 재렌더링된 컴포넌트의 모든 하위 컴포넌트는 재랜더링 됨

    주의! State는 항상 setter를 이용해서 변경해야하며 절대로 값을 대입해서는 안 됨!
  */

  return (
    <>
      <h1>완전 중요</h1>
      <h3>{ count }</h3>
      <button onClick={ countBtn }>나 클릭하면 숫자가 올라감</button>
    </>
  )
}

export default Chapter03;