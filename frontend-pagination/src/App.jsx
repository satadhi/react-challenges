import { useState } from 'react';
import './App.css'
import useFetch from './customHooks/useFetch'
function App() {

  const LIMIT = 10;
  const { data, error } = useFetch('https://dummyjson.com/products?limit=500');
  const [pageFlag, setPageFlag] = useState(1);

  if (error)
    return <>Ops something went wrong</>

  if(data.length === 0)
    return <div> OMG the data is still loading</div>

  return (
    <>
      <h1>Produts</h1>
      <div className='page-details'>
        {Array.from({ length: Math.ceil(data.length / LIMIT) }, (_, idx) => (
          <div className="page-details-keys"
           style={{background : pageFlag == 1+ idx ? "red": "white"}}
            key={idx}
            onClick={() => {setPageFlag(1+idx)}}
            >{idx + 1}</div>
        ))}
      </div>
      <div className='product-list'>
        {data.slice(LIMIT*(pageFlag -1), LIMIT*(pageFlag -1) + LIMIT ).map((ele) => <div key={ele.id} className='item'>
          <div className='item-title'>{ele.title}</div>
          <img src={ele.images[0]} width='200'></img>
          <div>{ele.brand}</div>
          <div>{ele.category}</div>
          <div>{ele.price}$</div>
        </div>)}
      </div>
    </>
  )
}

export default App
