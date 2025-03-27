const Header = () => {
  return (
    <>
      <div id="header">
          <div id="header_1">
              <div id="header_1_left">
                  <img src="https://kh-academy.co.kr/resources/images/main/logo.svg" alt="" />
              </div>
              <div id="header_1_center"></div>
              <div id="header_1_right">
              

                  <a href="signUp-form">회원가입</a>
                  <a data-toggle="modal" data-target="#loginModal">로그인</a>

                <label> 님 환영합니다</label> &nbsp;&nbsp;
                  <a href="mypage">마이페이지</a>
                  <a href="signOut">로그아웃</a>


              </div>
          </div>
          <div id="header_2">
              <ul>
                  <li><a href="/spring/main">HOME</a></li>
                  <li><a href="">공지사항</a></li>
                  <li><a href="/spring/boards">자유게시판</a></li>
                  <li><a href="">사진게시판</a></li>
              </ul>
          </div>
      </div>

      <div class="modal fade" id="loginModal">
          <div class="modal-dialog modal-sm">
              <div class="modal-content">
                  <div class="modal-header">
                      <h4 class="modal-title">Login</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
          
                  <form action="signIn" method="post">
                      <div class="modal-body">
                          <label for="userId" class="mr-sm-2">ID : </label>
                          <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Enter ID" id="userId" name="memberId" /> <br />
                          <label for="userPwd" class="mr-sm-2">Password : </label>
                          <input type="password" class="form-control mb-2 mr-sm-2" placeholder="Enter Password" id="userPwd" name="memberPw" />
                      </div>
                            
                      <div class="modal-footer">
                          <button type="submit" class="btn btn-primary">로그인</button>
                          <button type="button" class="btn btn-danger" data-dismiss="modal">취소</button>
                      </div>
                  </form>
              </div>
          </div>

      </div>
      
      <br clear="both"></br>
    </>
  )
}

export default Header;