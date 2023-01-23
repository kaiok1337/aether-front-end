import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './product.css'

function Product({user}) {
    const [info, setInfo] = useState([])
    const navigate = useNavigate()

    const goToProduct = (id) => {
      navigate({
        pathname: `/product/${id}`,
      })
    }

    async function getProductInfo() {
      const infoData = await axios.get("https://aether-web-store-api.herokuapp.com/products")
      console.log(infoData.data)
      setInfo(infoData.data)
    }

    async function deleteProduct(id) {
        await axios.delete(`https://aether-web-store-api.herokuapp.com/products/${id}`)
    }

    useEffect(() => {
        getProductInfo()
      }, [])

    console.log(info)
    return(
        <main>
          
          <section className="card-container">
          
            { info.map((product, i) =>
            <div key={i} className="product-card" onClick={() => goToProduct(product._id)}>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <img className='card-img' src={product.imgUrl}/>
              { user.role === 'admin' ? 
              <button onClick={() => deleteProduct(product._id)} >delete</button>
            : null}
            </div>
            )}
          </section>
        </main>
    )
}



export default Product;