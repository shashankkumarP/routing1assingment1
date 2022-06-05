import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"
import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
  let [products,setProducts] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/products").then((res)=>{console.log(res.data);setProducts(res.data)}).catch(err=>console.log("err",err));

  },[])
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
      
        <div >
          {products.map((l)=>(
            <div key={l.id}>
              <Link to={`/products/${l.id}`}>{l.name}</Link>
            </div>
          ))}
        </div>
      
      
      
    </div>
  )
}
