import React, { useState } from 'react';
import './App.css';
const App = (props) => {
  const [show, setShow] = useState(true);
  const [isShow, setIsShow] = useState('tes');
  const [isPrint, setIsPrint] = useState(true);
  const [isEcho, setIsEcho] = useState('true');

  const print = () => {
    if (isPrint) {
      return <h4>Is Print?</h4>;
    } else {
      return '';
    }
  }


  const echo = () => {
    switch (isEcho) {
      case 'true':
        return <h4>Is Echo?</h4>;
      default:
        return '';
    }
  }

  return (
    <div align="center" >
      <h1 >React Condition</h1>

      {(show || isShow) ? < p > This is test</p> : ''}


      {(isShow && show) && (<h4>Is Display?</h4>)}


      {print()}

      {echo()}


    </div >
  )
}

export default App;
