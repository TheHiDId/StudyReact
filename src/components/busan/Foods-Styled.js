import styled from "styled-components";

export const StyledWrap = styled.div`
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

export const StyledInnerWrap = styled.div`
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

export const StyledTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: orangered;
  text-align: center;
  margin: 30px 0px;
`

export const StyledContentBox = styled.div`
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

export const StyledImage = styled.img`
  width: 95%;
  height: auto;
  margin: auto;
  margin-top: 7px;
  border: 2px solid orangered;
  border-radius: 10px;
`

export const StyledName = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
`

export const StyledMoreBtn = styled.button`
  width: 300px;
  height: 70px;
  margin: auto;
  margin-bottom: 30px;
  font-size: 24px;
  text-align: center;
  border: 2px solid orangered;
  border-radius: 10px;
`