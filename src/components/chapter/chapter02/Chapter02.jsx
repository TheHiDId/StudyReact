import styled from "styled-components";

const StyledDiv = styled.div`
  width: 500px;
  height: 150px;
  border: 1px solid black;
  display: inline-block;
  margin: 40px;
  background-color: ${(props) => (props.color ? props.color : "white")};
`

const MemberInfo = (props) => {
  const { memberId, memberName, email, color } = props.member;
  return (
    <>
      <StyledDiv color={color}>
        <h4>아이디: {memberId}</h4>
        <strong>이름: {memberName}</strong>
        <p>이메일: {email}</p>
      </StyledDiv>
    </>
  );
};

const Chapter02 = () => {
  const response = [
    {
      memberId: 'admin',
      memberName: '짱구',
      email: 'admin01@kh.com',
      color: 'lightyellow',
    },
    {
      memberId: 'user01',
      memberName: '철수',
      email: 'user01@kh.com',
      color: 'lightblue',
    },
    {
      memberId: 'user02',
      memberName: '유리',
      email: 'user02@kh.com',
    },
  ];

  return (
    <>
      { response ? (response.map((e, i) => 
        <MemberInfo member={e} key={e.memberId}/>)
      ) : (
        <div>조회결과가 존재하지 않습니다.</div>
      )}

    {/* 
      <MemberInfo {...response[0]} />
      <MemberInfo {...response[1]} />
      <MemberInfo {...response[2]} /> 
    */}

    {/*
      <StyledDiv>
        <h4>아이디: { response[0].memberId }</h4>
        <strong>이름: { response[0].memberName }</strong>
        <p>이메일: { response[0].email }</p>
      </StyledDiv>
      <StyledDiv>
        <h4>아이디: { response[1].memberId }</h4>
        <strong>이름: { response[1].memberName }</strong>
        <p>이메일: { response[1].email }</p>
      </StyledDiv>
      <StyledDiv>
        <h4>아이디: { response[2].memberId }</h4>
        <strong>이름: { response[2].memberName }</strong>
        <p>이메일: { response[2].email }</p>
      </StyledDiv>
    */}
    </>
  )
}

export default Chapter02;