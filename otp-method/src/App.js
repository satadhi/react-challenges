import { useEffect } from 'react';
import './App.css';
import { useRef } from 'react';
import { useState } from 'react';

function App() {

  const CODE = '1234';
  
  const emptyArr = ['', '', '', ''];
  const refs = [useRef(), useRef(), useRef(), useRef()];
  
  const [inputs, setInputs] = useState(emptyArr);

  
  const [missing, setMissing] = useState(emptyArr);
  const handleSubmit = () => {

    const missed = inputs.map((item, i) => {
      if (item === '')
        return i;
    }).filter((item) => (item || item === 0));
    console.log('missed ', missed);
    setMissing(missed);
    if (missed.length) {
      return
    }

    const userInput = inputs.join('');
    const isMatch = userInput === CODE;
    const msg = isMatch ? 'Code is Valid' : 'Code is not Valid';
    alert(msg);
  }

  useEffect(() => {
    refs[0].current.focus();
  }, [])

  const handleInputChange = (e, index) => {
    const val = e.target.value;
    console.log(val, !Number(val), index);
    if (!Number(val))
      return;

    console.log('index: ', index);
    if (index < inputs.length - 1) { // 1
      refs[index + 1].current.focus();
    }
    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs);
  }

  // this is basically handling deletion so when you enter backspace
  const handleOnKeyDown = (e, index) => {
    console.log("I hit backspace",e.keyCode, index);
    if (e.keyCode === 8) {
      const copyInputs = [...inputs];
      copyInputs[index] = '';
      setInputs(copyInputs);

      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  }

  // this is pasting of the OTP
  const handlePaste = (e) => {
    const data = e.clipboardData.getData('text');
    console.log('paste data ', data)
    if (!Number(data) || data.length !== inputs.length)
      return;

    // the logic is; you need to paste the complete OTP and wher ever you paste
    // i.e; in the second box or the third box it will auto align themselves
    const pastCode = data.split('');
    setInputs(pastCode);
    refs[inputs.length - 1].current.focus();
  }
  console.log('inputs ', inputs);
  return (
    <div className="App">
      <h1>Two-factor code input</h1>
      <div>
        {
          emptyArr.map((item, i) => {
            return <input
              value={inputs[i]}
              key={i}
              ref={refs[i]}
              type='text'
              maxLength="1"
              onPaste={handlePaste}
              onChange={(e) => handleInputChange(e, i)}
              onKeyDown={(e) => handleOnKeyDown(e, i)} // handling of deletion hitting of backspace
              className={missing.includes(i) ? 'error' : ''}
            />
          })
        }
      </div>
      <button
        onClick={handleSubmit}
      >Submit</button>
    </div>
  );
}

export default App;