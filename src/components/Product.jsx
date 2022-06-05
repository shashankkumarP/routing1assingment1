import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

export const Product = () => {
  let [product,setProduct] = useState({})
  const {id} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:8000/products/${id}`).then((res)=>{setProduct(res.data)}).catch(err=>console.log("err",err));

  },[])

  
  return (
    <div >
       <h1>Product id : {id}</h1>
      <div>{product.name}</div>
      <h3>{product.price}</h3>


    </div>
  )
}
