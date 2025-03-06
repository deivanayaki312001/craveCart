import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryItems from "./CategoryItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleclearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col justify-center items-center mx-20">
      <h1 className="font-bold text-xl">Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center text-center gap-5">
          <div>Your cart is empty</div>
          <img
            className="w-52 h-52"
            src="https://img.freepik.com/free-vector/empty-shopping-basket-concept-illustration_114360-17704.jpg?t=st=1738958137~exp=1738961737~hmac=6224aa9ff2e56eaff8fbb152aed9cb91e624ec50a2c75297bd164341d9703c62&w=740"
          />
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">
          <Link to ="/">
            Explore Restaurants
            </Link>
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <button
            className="bg-orange-500 font-semibold text-white px-5 py-3 m-5 rounded-lg "
            onClick={handleclearCart}
          >
            Clear Cart
           
          </button>
          <CategoryItems item={cartItems} />
        </div>
      )}
    </div>
  );
};
export default Cart;
