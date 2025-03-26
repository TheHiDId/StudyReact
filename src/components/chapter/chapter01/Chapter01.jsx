import "./Chapter01.css"
import { StyledGreenP, StyledP } from "./Chapter01.styles"

/*
  함수형 사용 시 주의점

  1. 함수형 컴포넌트에서 리턴 시 반환할 리액트 엘리먼트가 두 개 이상이라면 반드시 하나 이상의 부모 요소로 감싸주어야 함
  2. 감쌀 태그가 없다면 리액트에서 제공하는 Fragment 컴포넌트를 사용하거나 빈 태그(<></>)로 감싸주어야 함
*/

const Chapter01 = () => {
  // AJAX 요청 보내기
  // 요청이 갔다 왔다고 가정
  const obj = {
    boardTitle : '제목입니다.',
    boardContent : '내용입니다.',
    boardWriter : '관리자',
    createDate : '2025-03-26',
    boardNo : 1,
  }

  return (
    <>
      <p className="styled-p">{ obj.boardNo }</p>
      <p>{ obj.boardTitle }</p>
      <StyledP>{ obj.boardContent }</StyledP>
      <StyledGreenP>{ obj.boardWriter }</StyledGreenP>
      <p>{ obj.createDate }</p>
    </>
  )
}

export default Chapter01;