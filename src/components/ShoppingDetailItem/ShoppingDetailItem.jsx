import React from "react";
import { Link, useParams } from "react-router-dom";
import { add } from "../State/Slice/CartSlice";
import { open } from "../State/Slice/CheckOutSlice";
import { useDispatch } from "react-redux";
import { items } from "../../itemsList";
import { HiChevronLeft } from "react-icons/hi";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));
  const { name, price, image } = item;
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      {/* Return Home botton */}
      <Link
        to="/"
        className="fixed flex items-center top-0 left-0 cursor-pointer bg-black text-white font-bold p-3"
      >
        <HiChevronLeft className="text-2xl" />
        Return Home
      </Link>
      {/* Item Details */}
      <div className="lg:flex items-center justify-center gap-11">
        <img src={image} alt="" className="max-w-[20rem] mx-auto" />
        <div className="mt-4">
          <div className="text-3xl font-extrabold mb-4">{name}</div>
          <div className="mb-4">${price}</div>
          <p className="max-w-[400px] mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique recusandae
            reiciendis, ad iure accusantium magni, quisquam nisi asperiores incidunt
            quibusdam dolores deleniti. Fugiat, nisi magnam.
          </p>
          <button
            className="bg-black text-white p-3"
            onClick={() => {
              dispatch(add(item));
              dispatch(open());
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
