import React from "react";
import { HiChevronLeft, HiTrash } from "react-icons/hi";
import { open } from "../State/Slice/CheckOutSlice";
import { clear } from "../State/Slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import CheckOutItems from "./CheckOutItems";

function CheckOut() {
  const dispatch = useDispatch();
  const { amount, cartItems } = useSelector((state) => state.cart);

  // total price of all items together
  let total = 0;
  cartItems.forEach((item) => {
    total += item.amount * item.price;
  });

  return (
    <div className="fixed top-0 left-0 bg-transparentBlack w-full h-screen">
      <div className="h-full p-4 bg-neutral-300 sm:w-[40rem] min-w-[15rem] overflow-y-auto">
        <div className="p-6 flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer font-bold"
            onClick={() => dispatch(open())}
          >
            <HiChevronLeft className="text-2xl" />
            <span className="uppercase text-[0.95rem] select-none">
              Continue Shopping
            </span>
          </div>
          <div className="font-bold uppercase">Shopping Bag ({amount})</div>
        </div>
        <div className="mt-8">
          {cartItems.length === 0 ? (
            <div className="uppercase text-center text-3xl">Your cart is empty</div>
          ) : (
            <>
              {cartItems.map((cartItem) => {
                return <CheckOutItems key={cartItem.id} cartItem={cartItem} />;
              })}
              <div className="flex justify-between items-center mt-12">
                <div>Total Cost: ${total.toFixed(2)}</div>
                <HiTrash
                  className="cursor-pointer text-3xl"
                  onClick={() => dispatch(clear())}
                />
              </div>
              <div className="text-center cursor-pointer bg-black text-white p-3 mt-8">
                CheckOut
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
