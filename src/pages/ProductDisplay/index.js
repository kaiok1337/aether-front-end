import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import './product.css'


export default function ProductDisplay({isLoggedIn}) {
    const [product, setProduct] = useState({})
    const { handle } = useParams()

    async function getProductInfo() {
        const infoData = await axios.get(`https://aether-web-store-api.herokuapp.com/products/${handle}`)
        setProduct(infoData.data)
      }
    
    async function addToCart(product){
        const productToAdd = {
            name: product.name,
            price: product.price,
            quantity: 1,
            productId: product._id
        }
        let bearerToken = localStorage.getItem('token')
        const config = {
          headers:{
            Authorization: `Bearer ${bearerToken}`
          }
        };
        
        await axios.post("https://aether-web-store-api.herokuapp.com/cart", productToAdd, config)
    }

    useEffect(() => {
        getProductInfo()
    }, [])
      
    
      return(
        <main>
            <div className='info-card'>
                <div>
                    <h1 className="product-title">{product.name}</h1>
                    <p>{product.description}</p>
                </div>
                
                <img className="product-img" src={product.imgUrl}/>

                { isLoggedIn ?
                  <button className='add-to-cart' onClick={() => addToCart(product)}>Add to cart</button>
                : null}
            </div>
        </main>
    )
}
