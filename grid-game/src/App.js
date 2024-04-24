import { useEffect, useState } from "react";
import "./App.css";

function App() {
  console.log("page is re-rendering....");
  let elements = [];

  for (let i = 0; i < 9; i++) {
    if (i == 4) {
      elements.push(
        <div className="border-solid border-2 border-black-500"></div>
      );
    } else {
      elements.push(
        <div
          className="border-solid border-2 border-black cursor-pointer"
          onClick={(e) => handleBoxClick(e, i)}
        ></div>
      );
    }
  }

  let [clickItems, setClickItems] = useState([]);
  let [startReset, setStartReset] = useState(null);

  // explain what is wrong in be below code
  // i want to remove the greent color bg in the order of click in 3 sec interval
  // useEffect(() => {
  //   if (!clickItems.length) return () => {};
  //   console.log("i am hitting the useEffect");
  //   let timer1 = setTimeout(() => {
  //     clickItems[0].target.style.backgroundColor = "white";
  //     setLastClickTime(clickItems.shift());
  //     setClickItems((ele) => ele++);
  //     console.log("value chaking");
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, [lastClickTime]);

  console.log(" ia m at line 42");
  if (clickItems.length == 8) {
    let timerArray = [];

    for (let i = 1; i <= 8; i++) {
      let timer1 = setTimeout(() => {
        clickItems[i - 1].target.style.backgroundColor = "white";
        console.log(startReset, clickItems);
      }, 1000 * i);

      timerArray.push(timer1);
    }

    setClickItems([]);
    setStartReset(null);
  }

  function handleBoxClick(event, ele) {
    console.log(event.target.style.backgroundColor);
    event.target.style.backgroundColor = "green";
    setClickItems((ele) => [...ele, event]);

    if (clickItems.length + 1 === 8) {
      setStartReset(true);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4 h-3/5 w-2/5">{elements}</div>
    </div>
  );
}

export default App;
