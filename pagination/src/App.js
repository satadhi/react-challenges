import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";

export default function App() {
  let size = 20;
  let [total, setTotal] = useState(0);
  let [items, setItems] = useState([]);
  let [skip, setSkip] = useState(0);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=${size}`).then((res) => {
      console.log(res);
      setItems(res.data.products);
      setTotal(res.data.total);
    });
  }, []);

  function serverSidePagination() {
    axios
      .get(`https://dummyjson.com/products?limit=${size}&skip=${skip + size}`)
      .then((res) => {
        console.log(res);
        setItems(res.data.products);
        setTotal(res.data.total);
        setSkip(skip + size);
      });
  }

  return (
    <div>
      <div className="p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, index) => {
            return (
              <div className="border p-5 rounded-sm" key={item.id}>
                <img src={item.images[1]} className="h-36"></img>
                <div className="mb-4 text-2xl">{item.title}</div>
                <div class="mb-4 text-grey-darker text-sm flex-1">
                  <p>{item.description}</p>
                </div>
                <div class="mb-4 text-grey-darker text-sm flex-1">
                  <p>Stock: {item.stock}</p>
                </div>
                <div class="mb-4 text-grey-darker text-sm flex-1">
                  <p>Rating: {item.rating}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Pagination
        skip={skip}
        size={size}
        total={total}
        serverSidePagination={serverSidePagination}
      />
      ;
    </div>
  );
}
