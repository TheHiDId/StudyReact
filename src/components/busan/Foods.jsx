import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledWrap, StyledInnerWrap, StyledTitle, StyledContentBox, StyledImage, StyledName, StyledMoreBtn } from "./Foods-Styled";

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

    axios.get(`http://localhost/busans?pageNo=${ pageNo }`)
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