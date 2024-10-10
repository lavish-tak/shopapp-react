import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";

import { useDispatch } from "react-redux";
import { add,remove } from "../redux/slices/cartSlice";
const CartItem = ({item,itemIndex})=>{
    const dispatch = useDispatch();
    const removeFromCart = ()=>{
        dispatch(remove(item.id));
        toast.error("Item removed from cart")
    }
    return (
        <div class="ml-80 m-4 h-56 w-2/6 border-b-2 border-b-black">
           <div className="flex mt-8 mb-5">
            <div className="h-[180px] w-[180px]">
                <img src={item.image} className="h-40 w-32 mr-40"/>
            </div>
            <div>
                <h1 className="font-bold text-left text-[18px]">{item.title}</h1>
                <h1 className="text-gray-700 font-normal text-[12px] mt-2">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
                <div className="flex justify-between gap-10 items-center mb-2 mt-8" >
                    <p className="text-green-600 font-bold text-[15px]">${item.price}</p>
                     <div onClick={removeFromCart} className="bg-red-400 w-6 h-6 flex items-center justify-center
                     rounded-full">
                     <ImCross />
                     </div>
                </div>
            </div>
           </div>
        </div>
    );
};
export default CartItem;