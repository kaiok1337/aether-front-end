import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import './product.css'


export default function ProductDisplay() {
    const [product, setProduct] = useState({})
    const { handle } = useParams()

    async function getProductInfo() {
        const infoData = await axios.get(`https://aether-web-store-api.herokuapp.com/products/${handle}`)
        console.log(infoData.data)
        setProduct(infoData.data)
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
        
        await axios.post("https://aether-web-store-api.herokuapp.com/cart", productToAdd, config)
    }

    useEffect(() => {
        getProductInfo()
    }, [])
      
    
      return(
        <main>
            <h1 className="product-title">{product.name}</h1>
            <img className="product-img" src={product.imgUrl}/>
            <button onClick={() => addToCart(product)}>Add to cart</button>
        </main>
        

    )
}
