const ChildComponent = (props) => {
  console.log(props);
  return (
    <>
      <p>주의점</p>
    </>
  )
}

const Chapter02_2 = () => {
  /*
    주의할 점

    리액트의 함수 컴포넌트는 함상 순수해야하기 때문에 절대로 props값을 변경해서는 안 됨!

    리액트의 사용목적: 웹 애플리케이션의 UI => MVC패턴의 V(View), 필요한 값 입력받고 요청보내고 결과 출력
  */

  return (
    <>
      <ChildComponent name={1} age={15} />
      <ChildComponent name={2} age={16} />
    </>
  );
};

export default Chapter02_2;