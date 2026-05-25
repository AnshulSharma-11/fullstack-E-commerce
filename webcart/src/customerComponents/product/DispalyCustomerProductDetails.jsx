import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DispalyCustomerProductDetails() {
    let urlParams = useParams()
     let [product, setProduct] = useState(null)

      useEffect(()=>
        {
          async function getProductsById()
          {
            let response =await fetch(`http://Localhost:8080/api/v1/products/${urlParams.id}`)
            let responseObject =await response.json()
            setProduct(responseObject.data)
          }
             getProductsById()
        
      },[])
  return (
    <div className='container mt-5'>

      {
        product==null?"Loading....":
        <div className="card mb-3 w-100">
            <div className="row g-0">
                <div className="col-md-4  text-center">
                    <img src={`http://localhost:8080/images/${product.imageName}`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title text-capitalize">{product.name}</h3>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className='fw-bold'> &#8377; {product.price}</p>
                    </div>

                    <div className='mb-3 d-flex w-50 justify-content-between'>
                        <Link to={"/"} className='btn btn-primary'>Add to Cart</Link>
                        <Link to={"/"} className='btn btn-success'>Buy Now</Link>
                    </div>
                </div> 
            </div>
        </div>
      }
    </div>
  )
}
