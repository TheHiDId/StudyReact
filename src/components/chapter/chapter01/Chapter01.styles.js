import styled from "styled-components"

export const StyledP = styled.p`
background-color: #f1f1f1;
width: 500px;
height: 200px;
border: 1px dotted rgb(200, 100, 100);

&:hover {
  pointer-events: cursor;
  background-color: red;
}
`
export const StyledGreenP = styled.p`
background-color: #f1f1f1;
width: 500px;
height: 200px;
border: 1px dotted rgb(200, 100, 100);

&:hover {
  pointer-events: cursor;
  background-color: green;
}
`