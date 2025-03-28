import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { StyledWrap, StyledInnerWrap, StyledTitle, StyledMoreBtn } from "../Foods-Styled";
import { useNavigate } from "react-router-dom";
import CommentList from "../comment/CommentList";

const StyledMainImage = styled.img`
  width: 95%;
  height: auto;
`

const StyledDescription = styled.div`
  font-size: 18px;
  margin: 20px 0px;
`

const StyledMap = styled.div`
  width: 500px;
  height: 500px;
`

const FoodDetail = () => {
  /*
  const location = useLocation();

  console.log(location.state);
  */

  const { id } = useParams();
  const [ load, setLoad ] = useState(false);
  const [ food, setFood ] = useState({
    title: '',
    image: '',
    description: '',
    address: '',
    usage: '',
    url: '',
    tel: '',
    lat: '',
    lng: '',
  });
  const [ content, setContent ] = useState("");
  const [ success, setSuccess ] = useState(false);
  const navi = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost/busans/${ id }`)
    .then(result => {
      const response = result.data.getFoodKr.item[0];

      setFood({
        title: response.MAIN_TITLE,
        image: response.MAIN_IMG_NORMAL,
        description: response.ITEMCNTNTS,
        address: response.ADDR1,
        usage: response.USAGE_DAY_WEEK_AND_TIME,
        url: response.HOMEPAGE_URL,
        tel: response.CNTCT_TEL,
        lat: response.LAT,
        lng: response.LNG,
      });

      setLoad(true);

      if(food.lat) {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new window.kakao.maps.LatLng(response.LAT, response.LNG), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    
        var map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
      
        var markerPosition = new window.kakao.maps.LatLng(response.LAT, response.LNG); 
  
        var marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
  
        marker.setMap(map);
      }

    });
  }, [food.lat, load]);

  const submitHandler = (e) => {
    e.preventDefault();

    if(content.trim() === "") {
      alert("내용을 입력해주세요.")
      return;
    }

    axios.post(`http://localhost/busans/comments`, {
      seq: id,
      content: content,
    })
    .then(result => {
      setContent("");
      setSuccess(!success);
    });
  }

  const contentHandler = (e) => {
    setContent(e.target.value);
  }

  if(!load) {
    return (
      <StyledWrap>
        <StyledTitle>음식점을 조회 중입니다...</StyledTitle>
        <StyledInnerWrap>

        </StyledInnerWrap>
      </StyledWrap>
    )
  }

  return (
    <>
      <StyledWrap>
        <StyledTitle>{ food.title }</StyledTitle>
        <StyledInnerWrap>
          <StyledMainImage src={ food.image } />
          <StyledDescription>{ food.description }</StyledDescription>
          <div>{ food.address }</div>
          <div>{ food.usage }</div>
          <div>{ food.url }</div>
          <StyledMap id="map"></StyledMap>
          <StyledMoreBtn onClick={ () => navi(-1) }>뒤로가기</StyledMoreBtn>
        </StyledInnerWrap>
        <div style={ { width: "80%", height: "600px", margin: "auto" } }>
          <form onSubmit={ submitHandler }>
            <input type="text" onChange={ contentHandler } />
            <StyledMoreBtn>댓글 남기기</StyledMoreBtn>
          </form>
          <CommentList UC_SEQ={ id } success={ success } />
        </div>
      </StyledWrap>
    </>
  );
};

export default FoodDetail;