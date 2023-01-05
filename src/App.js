import Navbar from "./components/Navbar/Navbar";
import ShoppingContainer from "./components/ShoppingContainer/ShoppingContainer";
import CheckOut from "./components/CheckOut/CheckOut";
import { useSelector } from "react-redux";

function App() {
  const { isOpen } = useSelector((state) => state.checkout);

  return (
    <div className="mb-8">
      <Navbar />
      <ShoppingContainer />
      {/* if isOpen is true the CheckOut component is rendered */}
      {isOpen && <CheckOut />}
    </div>
  );
}

export default App;
