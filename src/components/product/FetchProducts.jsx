import React, { useEffect, useState } from 'react'
import DisplayProducts from './DisplayProducts'
import { toast } from 'react-toastify'

export default function FetchProducts() {
  let [isProductDeleted, setIsProductDeleted]=useState(false)
  let [products, setProducts]=useState(null)


  useEffect(()=>{
    async function getProductsByVendor()
    {
      let response=await fetch(`http://localhost:8080/api/v1/vendor/${98}/products`)
      let responseObject =await response.json()
      setProducts(responseObject.data)
     
    }
    getProductsByVendor()
  },[isProductDeleted])


  async function deleteProduct(productId)
    {
      setIsProductDeleted(false)
        let response=await fetch(`http://localhost:8080/api/v1/vendor/98/products/${productId}`,
            {
                method:"DELETE"
            })
        if(response.status === 200)
        {
            toast.success("product deleted")
            setIsProductDeleted(true)
        }
        else
        {
            toast.error("product not deleted!")
        }
    }
  return (
    <div>
      {products==null?"Loading....":<DisplayProducts productsValue={products} onDeleteProduct={deleteProduct}/>}
    </div>
  )
}
