import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navi = useNavigate();

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

      <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navi("/")}>WhatisReact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navi("/whatisjsx")}>WhatisJSX</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navi("/chap01")}>Chapter01</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navi("/chap02")}>Chapter02</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navi("/chap02_2")}>Chapter02_2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navi("/chap03")}>Chapter03</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navi("/chap03input")}>Chapter03Input</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navi("/chap03b")}>Chapter03B</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navi("/memo")}>Memo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={() => navi("/foods")}>부산맛집</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;