import React from "react";
import { add } from "../State/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ShoppingItem({ item }) {
  const dispatch = useDispatch();

  const { id, image, imageHover, price, name } = item;
  console.log(id);

  return (
    <div className="min-w-[200px] mx-auto">
      {/* Images */}
      <Link to={`/detail/${id}`}>
        <div className="bg-grey relative flex items-center justify-center cursor-pointer ">
          <img src={image} alt="" className="absolute hover:opacity-0" />
          <img src={imageHover} alt="" />
        </div>
      </Link>
      {/* Info Item */}
      <div className="flex flex-col text-center justify-between items-center ">
        <div className="my-6">
          <div className="text-xl font-light h-[50px] ">{name}</div>
          <div className="mb-3 mt-1 border-b-[2px] w-12 mx-auto border-yellow-600"></div>
          <div className="text-xl font-bold">${price}</div>
        </div>
        <button
          className="bg-black text-white p-3 w-full ease-in-out duration-200 hover:bg-yellow-600"
          onClick={() => dispatch(add(item))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ShoppingItem;
