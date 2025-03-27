import { useState } from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
  width: 1000px;
  height: auto;
  margin: auto;
  border: 1px solid black;
  border-radius: 12px;
  padding: 25px;
`

const StyledTitle = styled.h1`
  font-size: 40px;
  color: lightblue;
  text-align: center;
`

const StyledHr = styled.div`
  border: 1px solid black;
  margin: 50px 0px;
  width: 100%;
`

const StyledMemo = styled.div`
  width: 250px;
  height: 120px;
  margin: 20px;
  padding: 7px;
  background-color: lightyellow;
  border: 1px solid yellow;
  box-shadow: 0px 0px 1px 2px lightgray;
  display: inline-block;
`

const StyledContent = styled.div`
  width: 90%;
  height: 60%;
  margin: auto;
  padding: 7px;
  font-size: 19px;
  text-align: center;
`

const StyledWriter = styled.div`
  width: 90%;
  height: 20%;
  font-weight: bold;
  text-align: right;
  margin: auto;
`

const Memo = () => {
  // AJAX 요청을 잘 보내서 응답을 받았다는 가정 하에 메모들이 반환 됨(Table에서 조회 됨)
  const [memos, setMemos] = useState([
    {
      writer: '짱구',
      content: '집가고 싶다',
    },
    {
      writer: '철수',
      content: '배 고프다',
    },
    {
      writer: '유리',
      content: '귀찮다',
    },
    {
      writer: '훈이',
      content: '짜증난다',
    },
    {
      writer: '맹구',
      content: '돌 줍자',
    },
  ]);

  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');

  const inputContentHandler = (e) => {
    setContent(e.target.value);
  };

  const inputWriterHandler = (e) => {
    setWriter(e.target.value);
  };

  const addMemo = () => {
    const memo = { writer: writer, content: content };

    setMemos([...memos, memo]);

    setContent('');
    setWriter('');
  };

  return (
    <>
      <StyledWrap>
        <StyledTitle>메모 작성해보기</StyledTitle>
        <StyledHr />
        {
          memos ? 
          memos.map((memo, i) => 
            <StyledMemo key = { i }>
              <StyledContent>{ memo.content }</StyledContent>
              <StyledWriter>{ memo.writer }</StyledWriter>
              <br />
            </StyledMemo>
          ) : (
            <h2>메모가 존재하지 않습니다.</h2>
          )
        }
        <StyledHr />
        <div>
          <h4>내용을 입력해주세요!</h4>
          <input type="text" onChange={inputContentHandler} value={content} />
          <br />
          <br />
          <h4>작성자를 입력해주세요!</h4>
          <input type="text" onChange={inputWriterHandler} value={writer} />
          <br />
          <br />
          <button onClick={addMemo}>메모 추가하기</button>
        </div>
      </StyledWrap>
    </>
  )
}

export default Memo;