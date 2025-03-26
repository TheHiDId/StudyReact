const WhatisJSX = () => {
  return (
    <>
      <h2>JSX란 무엇인가?</h2>
      <p>
        JSX(JavaScriptXML)는 JavaScript + XML을 사용한 JavaScript 확장 문법
        <br />
        리액트 문법: React.createElement('h1', null, 'Hello, World!')
        <br />
        JSX 문법: &lt;h1&gt;Hello, World!&lt;/h1&gt;
        <br />
        JSX 문법을 사용해서 JavaScript 코드 내부에서 React의 Element를 생성할 수 있으며, 
        <br />
        JavaScript의 모든 기능을 이용할 수 있고, UI를 구현할 때 React와 함께 사용하는 것이 권장됨
        <br />
      </p>
        <h3>ReactElement란 무엇인가?</h3>
      <p>
        Component를 구성하는 요소
        <br />
        화면에 기술할 요소를 작성하여 React가 브라우저에 렌더링할 수 있게 해줌
        <br />
        특징: 불변 객체
        <br />
        React는 index.html 파일 안에 있는 root라는 id 속성 값을 가진 div 요소 안에서 모든 요소를 관리함
        <br />
        main.jsx에서 root.render()를 호출해서 element를 전달
        <br />
        React를 이용해서 UI를 변경하는 방법은 ReactElement를 만들어서 root.render()의 인자값으로 전달하는 방법 뿐임
      </p>
    </>
  )
}

export default WhatisJSX;