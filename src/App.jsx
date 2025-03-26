import './App.css'
import Chapter01 from './components/chapter/chapter01/Chapter01';
import Chapter02 from './components/chapter/chapter02/Chapter02';
import Chapter02_2 from './components/chapter/chapter02/Chapter02_2';
import WhatisJSX from './components/chapter/WhatisJSX';
import WhatisReact from './components/chapter/WhatisReact';
import { Assembly, AssemblyTwo } from './components/modules/Assemblies';
import Button from './components/modules/Button';
import FirstComponent from './components/modules/FirstComponent';

function App() {
  return (
  <>
    { false && <WhatisReact /> && <WhatisJSX /> && <Chapter01 /> && <Chapter02 />}
    
    <Chapter02_2 />
  </>
  )
}

export default App
