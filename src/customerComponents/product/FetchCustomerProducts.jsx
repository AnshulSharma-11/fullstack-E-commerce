import React, { useEffect, useState } from 'react'
import DisplayCustomerProducts from './DisplayCustomerProducts'
import Navbar2 from '../navbar/Navbar2'
import { useFetcher } from 'react-router-dom'
import FilterNavbar from '../navbar/FilterNavbar'



export default function FetchCustomerProducts() {
    let [products, setProducts]=useState(null)
    console.log(products);
    
    useEffect(()=>
    {
        async function fetchProducts()
        {
            let response=await fetch("http://localhost:8080/api/v1/products")
            let responseObject=await response.json()
            setProducts(responseObject.data)
        }
        fetchProducts()
    },[])

    function filterProducts(categoryName, subCategoryName, sortDirection)
    {
      //http://localhost:8080/api/v1/products/filter?
      let urlSearchParams=new URLSearchParams
      if(categoryName) urlSearchParams.append("categoryName", categoryName)
      if(subCategoryName) urlSearchParams.append("subCategoryName", subCategoryName)
      if(sortDirection) urlSearchParams.append("sortDirection", sortDirection)
      
      console.log(`http://localhost:8080/api/v1/products/filter?${urlSearchParams.toString()}`);
    }
  return (
    <div>
      <div className='container'>
            <FilterNavbar onfilterProducts={filterProducts}/>
                
               
        </div>
      
      {
        products==null?"Loading....":<DisplayCustomerProducts productsValue={products}/>
      }
    </div>
  )
}