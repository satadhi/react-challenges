import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let imageUrl = [
    'https://picsum.photos/id/60/300/200',
    'https://picsum.photos/id/70/300/200',
    'https://picsum.photos/id/20/300/200',
    'https://picsum.photos/id/40/300/200',
  ];

  let [imgVal, setImgVal] = useState(0);
  let [timerId, setTimerId] = useState(0);
  function handlePrev() {
    setImgVal((val) => (val - 1 + imageUrl.length) % imageUrl.length);

  }

  function handleNext() {

    console.log(imgVal)
    setImgVal((val) => (val + 1 + imageUrl.length) % imageUrl.length);
  }

  function handlePlay() {

    if(timerId !== 0)
      return 

    let id = setInterval(()=>{
      setImgVal((val) => (val - 1 + imageUrl.length) % imageUrl.length);
    }, 2000)

    setTimerId(id);
  }

  function handleStop() {
    clearInterval(timerId);
    setTimerId(0);
  }


  return (
    <div className='App'>

      <div>
        <img src={imageUrl[imgVal]} />
      </div>
      <div className='buttons'>
        <button onClick={handlePrev}> PREV</button>
        <button onClick={handleNext}> NEXT</button>
        <button onClick={handlePlay}> PLAY</button>
        <button onClick={handleStop }> STOP</button>
      </div>

    </div>
  );
}

export default App;
