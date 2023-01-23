import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './cart.css'

function Cart({user, cartItems, setCartItems}) {
    const [total, setTotal] = useState('')
    
    const navigate = useNavigate()

    async function getCart(){
        let bearerToken = localStorage.getItem('token')
        const config = {
          headers:{
            Authorization: `Bearer ${bearerToken}`
          }
        };
        const cartData = await axios.get(`https://aether-web-store-api.herokuapp.com/cart/${user.userId}`, config)
        await setCartItems(cartData.data.items)
        setTotal(cartData.data.totalPrice)
      }

      async function deleteCart(){
        let bearerToken = localStorage.getItem('token')
        const config = {
          headers:{
            Authorization: `Bearer ${bearerToken}`
          }
        };
        await axios.delete(`https://aether-web-store-api.herokuapp.com/cart/${user.userId}`, config)
        setCartItems([])
        navigate('/')
      }
    
      useEffect(() => {
        getCart()
        
      }, [])

    return(
        <main className='cart'>
            <h2>Shopping Cart</h2>
            { cartItems.map((product, i) =>
            <div>
              <h1 key={i}>{product.name} x {product.quantity}</h1>
              <img src={product.imgUrl} />
            </div>
            )}
            <h1>Total: {total}</h1>
            <button className='button-85' onClick={() => {deleteCart()}}>CHECKOUT</button>
        </main>
        
    )
}

export default Cart;