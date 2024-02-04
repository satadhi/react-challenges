import './App.css';
import { useState } from 'react';

function App({ data }) {


  const [places, setPlaces] =
    useState([...Object.keys(data), ...Object.values(data)].sort(() => Math.random() - 0.5)
      .map((value) => { return { value: value, state: 'DF' } }))


  const [options, setOptions] = useState([]);


  function handleClick(param) {
    console.log(param, options);

    if (options.length == 0) {
      param.state = 'ST';
      setOptions([param.value])
      setPlaces([...places])

    } else if (options.length == 1) {
      console.log("option.length == 1",data[param.value], options[0])

      if ((data[options[0]] && data[options[0]] === param.value)
        || data[param.value] && data[param.value] === options[0]) {

        const temp = [...places.filter((ele) => ![options[0], param.value].includes(ele.value))]
        console.log('correct option selected', [options[0], param.value], temp)
        setPlaces(temp)
        setOptions([])

      } else {

        for (let ele of places) {
          if (ele.value === param.value)
            ele.state = "WR"
          if (ele.value === options[0])
            ele.state = "WR"
        
        console.log("Wrong ansnwer selected ")
            setOptions([...options, param.value])
          
      }

        setPlaces([...places])
      }

    } else if (options.length == 2) {

      for (let ele of places) {
        if (ele.state === "WR")
          ele.state = "DF";
      }

      param.state = 'ST';
      setOptions([param.value])
      setPlaces([...places])
    }
  }

  return (
    <div className="App">
      {places.length ? places.map((keyName) => (
        <button className={`button ${keyName.state === 'ST' ? 'selected' : keyName.state === 'WR' ? 'wrong' : ''}`}
          onClick={() => handleClick(keyName)}>{keyName.value}</button>
      )) : "Congratulation !"}
    </div>
  );

}

export default App;