import React, { useEffect, useState } from 'react'
import Navbar2 from '../navbar/Navbar2'
import DisplayCustomerProducts from './DisplayCustomerProducts'

export default function FetchCustomerProducts() {
  let [products, setProducts] = useState(null)
  console.log(products);

  useEffect(()=>
    {
      async function fetchProducts()
      {
        let response =await fetch("http://Localhost:8080/api/v1/products")
        let responseObject =await response.json()
        setProducts(responseObject.data)
      }
      fetchProducts()
    
  },[])
  return (
    <div>
      <Navbar2/>
      {products==null?"Loading...":<DisplayCustomerProducts productsValue={products}/>
      }
        
    </div>
  )
}
