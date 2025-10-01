import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const {error, setError} = useState(false);
    useEffect(()=>{

     fetch(url)
     .then((payload)=>{
        
         if(!payload.ok) {
            throw new Error()
        }
        return payload.json();
        
     }).then((res)=>{
        setData(res.products)
     }).catch(()=>{
            setError(true)
     })
    },[url])

    return {error, data}
}