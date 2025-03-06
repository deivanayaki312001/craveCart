import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDNPIC } from "../utils/constants";
import { BiPlus, BiMinus } from "react-icons/bi";

const CategoryItems = ({ item }) => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState({}); // Track item quantities locally

  const addToCart = (i) => {
    const id = i.card.info.id;
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    dispatch(addItem(i)); // ✅ Update Redux state
  };

  const removeFromCart = (i) => {
    const id = i.card.info.id;
    if (cart[id] > 1) {
      setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    } else {
      const updatedCart = { ...cart };
      delete updatedCart[id]; // ✅ Remove item if quantity reaches 0
      setCart(updatedCart);
    }
    dispatch(removeItem(id)); // ✅ Update Redux state
  };

  return (
    <div>
      {item.map((i) => {
        const id = i.card.info.id;
        return (
          <div
            className="flex justify-between min-w-[800px] gap-4 border-b-2 border-neutral-200 mb-5 py-5 items-center"
            key={id}
            data-testid="foodItems"
          >
            <div>
              <img
                className="w-6 h-6"
                src={
                  i.card.info.itemAttribute.vegClassifier === "VEG"
                    ? "https://upload.wikimedia.org/wikipedia/commons/b/b2/Veg_symbol.svg"
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/120px-Non_veg_symbol.svg.png?20131205102929"
                }
                alt={i.card.info.itemAttribute.vegClassifier}
              />
              <div className="font-bold text-neutral-700">{i.card.info.name}</div>
              <span>
                ₹
                {i.card.info.price
                  ? i.card.info.price / 100
                  : i.card.info.defaultprice / 100}
              </span>
              <div className="my-2">
                ⭐
                {i.card.info.ratings.aggregatedRating.rating
                  ? i.card.info.ratings.aggregatedRating.rating +
                    " " +
                    `(${i.card.info.ratings.aggregatedRating.ratingCountV2})`
                  : "No rating"}
              </div>
              <p className="mb-5">{i.card.info.description}</p>
            </div>
            <div className="flex-col justify-center items-center">
              <img
                className={`min-w-36 h-36 aspect-square object-cover rounded-xl
                ${i.card.info.imageId ? "" : "h-0 w-0"}`}
                src={CDNPIC + i.card.info.imageId}
                alt=" "
              />
              {cart[id] ? (
                <div className="w-32 flex items-center justify-between bg-white border-[1px] px-4 py-2 rounded-lg relative bottom-5 left-2 ">
                  <button onClick={() => removeFromCart(i)} className="text-red-500 text-xl">
                    <BiMinus />
                  </button>
                  <span className="px-3">{cart[id]}</span>
                  <button onClick={() => addToCart(i)} className="text-green-500 text-xl">
                    <BiPlus />
                  </button>
                </div>
              ) : (
                <button
                  data-testid="addBtn"
                  className=" w-32 px-7 text-xl text-center py-2 bg-white text-green-600 relative bottom-5 left-2 font-bold rounded-lg border-[1px]"
                  onClick={() => addToCart(i)}
                >
                  ADD
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryItems;
