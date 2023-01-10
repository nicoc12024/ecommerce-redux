import React from "react";
import { HiX } from "react-icons/hi";
import { add, decrease, remove } from "../State/Slice/CartSlice";
import { useDispatch } from "react-redux";

const CheckOutItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { id, price, amount, name, image } = cartItem;
  return (
    <div
      className="flex justify-between items-center border border-solid border-glass p-4 mb-6"
      key={id}
    >
      <div className="flex items-center gap-4">
        <img src={image} alt="" className="w-20 h-20 object-cover" />
      </div>
      {/* increase or decrease quantity of items */}
      <div className="flex flex-col items-center text-center">
        <div className="uppercase ">{name}</div>
        <div className="flex items-center gap-4 mt-2">
          <button
            className="w-8 h-8 text-white bg-black "
            onClick={() => dispatch(decrease(cartItem))}
          >
            -
          </button>
          <div>{amount}</div>
          <button
            className="w-8 h-8 text-white bg-black "
            onClick={() => dispatch(add(cartItem))}
          >
            +
          </button>
        </div>
      </div>
      {/* total price of the item */}
      <div className="flex flex-col items-center gap-3">
        <HiX
          className="cursor-pointer text-xl"
          onClick={() => dispatch(remove(cartItem))}
        />
        <p>${(price * amount).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CheckOutItems;
