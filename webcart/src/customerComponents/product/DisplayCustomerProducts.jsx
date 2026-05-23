import React from 'react'

export default function DisplayCustomerProducts(props) {
  let products = props.productsValue
  console.log(products);

  return (
    <div className='container'>
      <div className="row">
        {
          products.map((product)=>
          {
            return <div className="col-3" key={product.id}>
              <div className="card">
                <img src={`http://localhost:8080/images/${product.imageName}`} className="card-img-top ms-auto me-auto" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href='#' className='btn-primary'>link </a>
                </div>
              </div>
            </div>
          })
        }

      </div>
        
    </div>
  )
}
