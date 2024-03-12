import React from 'react'
import { HiChevronLeft, HiTrash } from "react-icons/hi"
import CheckOutItems from './CheckOutItems'
import { clear } from '../../redux/reducers/cartSlice'
import { open } from '../../redux/reducers/checkSlice'
import { useDispatch, useSelector } from "react-redux"

const CheckOut = () => {
    const dispatch = useDispatch()
    const { cartItems, total, amount } = useSelector((state) => state.cart);

    const handleCheckout = () => {
      const orderedProducts = cartItems.map((item) => `${item.name || 'Unknown'}`).join(', ');
      const alertMessage = `You ordered ${amount} products with a total price of $${total.toFixed(2)}:\n${orderedProducts}`;
    
      window.alert(alertMessage);
    };

    
  return (
        <div className='bg-transparentBlack fixed z-30 top-0 left-0 w-full h-screen'>
          <div className="h-full bg-grey sm:w-[40rem] min-w-[15rem] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center cursor-pointer" onClick={() => dispatch(open())}>
                  <HiChevronLeft />
                  <span className='uppercase text-[0,95rem] select-none'>
                    Continue Shopping
                  </span>
                </div>
                <div>Shopping Bag ({amount})</div>
              </div>
              <div className="mt-8">
                {cartItems.length === 0 ? (
                  <div className='uppercase text-center text-3xl'>
                    Your cart is empty
                  </div>
                ) : (
                  <>
                    {cartItems.map((cartItem) => {
                      return (
                        <CheckOutItems 
                            key={cartItem.id} 
                            cartItem={cartItem} 
                        />
                      );
                    })}
                    <div className="flex justify-between items-center mt-12">
                        <div>Total Cost: ${total.toFixed(2)}</div>
                        <HiTrash className='cursor-pointer text-3xl' onClick={() => dispatch(clear())}/>
                    </div>
                    <div className="text-center cursor-pointer bg-black text-white p-3 mt-8 hover:bg-gray-800" 
                    onClick={handleCheckout}>
                      Checkout
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

export default CheckOut;