import toast from "react-hot-toast";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { add,remove } from "../redux/slices/cartSlice";
const CartItem = ({item,itemIndex})=>{
    const dispatch = useDispatch();
    const removeFromCart = ()=>{
        dispatch(remove(item.id));
        toast.success("Item removed from cart")
    }
    return (
        <div>
           <div>
            <div>
                <img src={item.image}/>
            </div>
            <div>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
                <div>
                    <p>{item.price}</p>
                     <div onClick={removeFromCart}>
                     <MdOutlineDeleteForever />
                     </div>
                </div>
            </div>
           </div>
        </div>
    );
};
export default CartItem;