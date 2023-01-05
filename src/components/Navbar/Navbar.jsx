import { BiShoppingBag } from "react-icons/bi";
import { open } from "../State/Slice/CheckOutSlice";
import { useDispatch, useSelector } from "react-redux";
import profilePicture from "../../images/nico2.png";

function Navbar() {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.cart);

  return (
    <div className="mb-48 sm:mb-32  max-w-[1400px] mx-auto">
      {/* Follow me popup */}
      <div className="max-w-[500px] w-[90%] border-2 absolute mx-auto top-0 left-0 right-0 border-grey border-t-0 py-4 px-2 flex flex-col sm:flex-row sm:text-left justify-center text-center items-center sm:gap-6 gap-2">
        <div className="w-14">
          <img src={profilePicture} className="w-14 h-14 rounded-full" alt="" />
        </div>
        <div className="max-w-[400px] text-xs">
          <span className="font-bold">Hi! I am Nicolas</span>
          <p>
            I am a passionate front-end developer looking for trainee or junior positions.
            I can work 100% remote if necessary.{" "}
            <span className="font-bold inline">
              Contact me on
              <a
                href="https://www.linkedin.com/in/nicocabello/"
                className="cursor-pointer"
              >
                {" "}
                Linkedin.
              </a>
            </span>
          </p>
        </div>
      </div>
      {/* Cart */}
      <div
        className="fixed top-0 right-0 cursor-pointer bg-black p-3"
        onClick={() => dispatch(open())}
      >
        <BiShoppingBag className="text-4xl text-white" />
        <div className="absolute w-5 h-5 rounded-full left-[-5px] bottom-[-8px] flex items-center justify-center text-[10px] bg-yellow-600	 text-white">
          {amount}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
