import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../../utils/cartSlice'



const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)

  const dispatch = useDispatch();
  const handleClearCart = () => {
    //dispatch an action
    dispatch(clearCart());
  }
  return (
    <div className='m-5 p-5 text-center'>
    <h1 className='text-2xl font-bold '>Cart </h1>
    <div className='w-6/12 m-auto'>
    <button className='p-2 m-2 bg-black text-white rounded-lg' 
    onClick={handleClearCart}>Clear Cart
    </button>
    {cartItems.length === 0 && <h1>Uh-Oh Cart is Empty! Add Items to the Cart</h1>}
    <ItemList items={cartItems}/>
    </div>
    </div>
  )
}

export default Cart