import './App.css'
import FoodDetail from './components/busan/detail/FoodDetail';
import Foods from './components/busan/Foods';
import Chapter01 from './components/chapter/chapter01/Chapter01';
import Chapter02 from './components/chapter/chapter02/Chapter02';
import Chapter02_2 from './components/chapter/chapter02/Chapter02_2';
import Chapter03 from './components/chapter/chapter03/Chapter03';
import Chapter03B from './components/chapter/chapter03/Chapter03B';
import Chapter03Input from './components/chapter/chapter03/Chapter03Input';
import Footer from './components/chapter/common/footer/footer';
import Header from './components/chapter/common/header/Header';
import Navbar from './components/chapter/common/navbar/Navbar';
import WhatisJSX from './components/chapter/WhatisJSX';
import WhatisReact from './components/chapter/WhatisReact';
import Memo from './components/memo/memo';
import { Assembly, AssemblyTwo } from './components/modules/Assemblies';
import Button from './components/modules/Button';
import FirstComponent from './components/modules/FirstComponent';
import {Route, Routes} from 'react-router-dom';

/*
  URL을 이용해서 url이 /chap01일 경우 Chapter01, /chap02일 경우 Chapter02를 보여주는 식으로 
  요청 URL에 따라서 다른 컴포넌트를 보여줄 수 있도록 리액트 라우터를 사용할 예정
*/

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={ <WhatisReact /> } />
        <Route path="/whatisjsx" element={ <WhatisJSX /> } />
        <Route path="/chap01" element={ <Chapter01 /> } />
        <Route path="/chap02" element={ <Chapter02 /> } />
        <Route path="/chap02_2" element={ <Chapter02_2 /> } />
        <Route path="/chap03" element={ <Chapter03 /> } />
        <Route path="/chap03input" element={ <Chapter03Input /> } />
        <Route path="/chap03b" element={ <Chapter03B /> } />
        <Route path="/memo" element={ <Memo /> } />
        <Route path="/foods" element={ <Foods /> } />
        <Route path="/foods/:id" element={ <FoodDetail /> } />
        <Route path="/*" element={ <h1>존재하지 않는 페이지 요청입니다.</h1> } />
      </Routes>
    </>
  )
}

export default App
