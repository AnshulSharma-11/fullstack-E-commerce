import React from 'react'
import { Link } from 'react-router-dom'
import DispalyCustomerProductDetails from './DispalyCustomerProductDetails'

export default function DisplayCustomerProducts(props) {
    let Products = props.productsValue
  return (
    <div className='container'>
      <div className="row">
        {
          Products.map((product)=>
          {
            return <div className="col-3" key={product.id}>
              <div className="card">
                <img src={`http://localhost:8080/images/${product.imageName}`} className="card-img-top ms-auto me-auto" />
                <div className="card-body">
                  <h5 className="card-title text-capitalize text-center">{product.name.slice(0,15)}</h5>
                  <p className='fw-bold'> &#8377; {product.price}</p>
                  <div className='d-flex justify-content-between'>
                    <span className='bg-primary badge'>{product.brand}</span>
                    <span className='bg-warning badge'>{product.subCategory.name}</span>
                  </div>
                  <p className='pb-0 mb-0' style={{textAlign:"justify"}}>{product.description}</p>
                  <div className='text-end mt-0 pt-0'>
                    <Link to={`/${product.id}`}> 
                      <i className="bi bi-arrow-right-circle-fill fs-4 text-secondary"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          })
        }

      </div>
        
    </div>
  )
}
