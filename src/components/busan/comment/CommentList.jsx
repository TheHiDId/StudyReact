import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledCommentBox = styled.div`
  width: 900px;
  height: auto;
`

const CommentList = (props) => {
  const [ comment, setComment ] = useState([]);

  const seq = props.UC_SEQ;

  useEffect(() => {
    axios.get(`http://localhost/busans/comments/${ seq }`)
    .then(result => {
      setComment([...result.data]);
    });
  }, [props.success]);

  return (
    <>
      {
        comment.length != 0 ? (
          comment.map((e, i) => {
            return (
              <StyledCommentBox key={ i }>{ e.content }{ e.createDate }</StyledCommentBox>
            )
          })
        ) : (
          <StyledCommentBox>
            <h5>댓글이 존재하지 않습니다.</h5>
          </StyledCommentBox>
        )
      }
    </>
  );
};

export default CommentList;