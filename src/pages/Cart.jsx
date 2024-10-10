import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { NavLink } from 'react-router-dom';
const Cart =()=>{
    const {cart} = useSelector((state)=>state);
    const [totalAmount,setTotalAmount] = useState(0);
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,cur)=> acc+cur.price,0));
    },[cart])
    return (
        <div >
        {
            cart.length >0 ? (<div className="mt-8 flex">
                <div className="mt-10 flex-grow ">
                   {
                    cart.map((item,index)=>{
                        return <CartItem key={item.id} item={item} itemIndex={index}/>
                    })
                   }
                </div>
                <div className="mt-8 ml-0 p-0 mr-64 ">
                    <div className="mt-8 flex flex-col">
                        <div className="text-green-700 font-bold text-[25px]">Your Cart</div>
                        <div className="text-green-700 font-bold text-[50px]">Summary</div>
                        <p>
                            <span className="text-gray-600 font-semibold">Total Items: {cart.length}</span>
                        </p>
                    </div>
                    <div className="mt-64">
                        <div className="flex flex-row">
                        <p className="flex mb-2 font-semibold text-gray-600">Total Amount: <p className="font-bold text-black">${totalAmount}</p></p>
                        </div> 
                         <button className="text-white bg-green-700 rounded-l font-bold
                    text-[30px] p-1 px-3 uppercase
                    hover:bg-white
                    hover:border-2 border-green-700
                    hover:text-green-700 transition duration-300 ease-in">
                        Check Now
                        </button>
                    </div>
                </div>
           </div> ):
           (<div>
              <h1>Cart Empty</h1>
              <NavLink to="/">
                   <button>
                    Shop Now
                   </button>
              </NavLink>
          </div> )
        }
        </div>
    )
};

export default Cart;
