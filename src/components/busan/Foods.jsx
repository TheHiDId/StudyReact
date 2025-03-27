import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledWrap = styled.div`
  width: 1200px;
  height: auto;
  min-height: 1200px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 2px solid orangered;
  border-radius: 10px;
  box-shadow: 0 0 1px 2px lightgray;
`

const StyledInnerWrap = styled.div`
  width: 1050px;
  height: auto;
  min-height: 1050px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 2px solid orangered;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
`

const StyledTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: orangered;
  text-align: center;
  margin: 30px 0px;
`

const StyledContentBox = styled.div`
  width: 300px;
  height: auto;
  min-height: 300px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 15px;
  border: 2px solid orangered;
  border-radius: 10px;
  background-color: orange;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 1px 2px gray;
    opacity: 0.9;
  }
`

const StyledImage = styled.img`
  width: 95%;
  height: auto;
  margin: auto;
  margin-top: 7px;
  border: 2px solid orangered;
  border-radius: 10px;
`

const StyledName = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
`

const StyledMoreBtn = styled.button`
  width: 300px;
  height: 70px;
  margin: auto;
  margin-bottom: 30px;
  font-size: 24px;
  text-align: center;
  border: 2px solid orangered;
  border-radius: 10px;
`

const Foods = () => {
  const [pageNo, setPageNo] = useState(1);
  const [foods, setFoods] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  
  const navi = useNavigate();

  useEffect(() => {
    /*
    fetch(`http://localhost/spring/busans?pageNo=${ pageNo }`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error("문제 발생!"))
    .finally(console.log("반드시 실행 됨"));
    */

    /*
    axios({
      url: `http://localhost/spring/busans?pageNo=${ pageNo }`,
      method: 'get',
    }).then(result => console.log(result));
    */

    axios.get(`http://localhost/spring/busans?pageNo=${ pageNo }`)
    .then(result => {
      const response = result.data.getFoodKr.item;

      setFoods([...foods, ...response]);

      if(response.length < 9) {
        setHasMore(false);
      }
    });
  }, [pageNo]);

  const nextPage = () => {
    setPageNo((pageNo) => pageNo + 1);
  }

  return (
    <>
      <StyledWrap>
        <StyledTitle>부산맛집 정보</StyledTitle>
        <StyledInnerWrap>
          {
            foods.length === 0 ? (
              <div>

              </div>
            ) : (
              foods.map(e => 
                <StyledContentBox key={ e.UC_SEQ } onClick={ () => navi(`/foods/${ e.UC_SEQ }`, { state: { e }, }) }>
                  <StyledImage src={ e.MAIN_IMG_THUMB } />
                  <StyledName>{ e.MAIN_TITLE }</StyledName>
                  <div>{ e.RPRSNTV_MENU }</div>
                </StyledContentBox>
              )
            )
          }
        </StyledInnerWrap>
        { hasMore && <StyledMoreBtn onClick={nextPage}>더보기</StyledMoreBtn> }
      </StyledWrap>
    </>
  )
}

export default Foods;