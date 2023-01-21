import axios from 'axios'
import React, { useState, useEffect } from 'react';
import './product.css'

function Product() {
    const [info, setInfo] = useState([])

    async function getProductInfo() {
      const infoData = await axios.get("https://aether-web-store-api.herokuapp.com/products")
      console.log(infoData.data)
      setInfo(infoData.data)
    }

    async function deleteProduct(id) {
        await axios.delete(`https://aether-web-store-api.herokuapp.com/products/${id}`)
    }

    async function addToCart(product){
        const productToAdd = {
            name: product.name,
            price: product.price,
            quantity: 1,
            productId: product._id
        }
        console.log(productToAdd)
        let bearerToken = localStorage.getItem('token')
        const config = {
          headers:{
            Authorization: `Bearer ${bearerToken}`
          }
        };
        
        await axios.post("http://localhost:8000/cart", productToAdd, config)
        
      }
    

    useEffect(() => {
        getProductInfo()
      }, [])

    console.log(info)
    return(
        <main>
          <div className='line'></div>
          <section className="card-container">
          
            { info.map((product, i) =>
            <div key={i} className="product-card" onClick={() => {addToCart(product)}}>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
              <img src={product.imgUrl}/>
            </div>
            )}
          </section>
        </main>
    )
}



export default Product;