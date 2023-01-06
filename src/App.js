import Navbar from "./components/Navbar/Navbar";
import ShoppingContainer from "./components/ShoppingContainer/ShoppingContainer";
import CheckOut from "./components/CheckOut/CheckOut";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingDetailItem from "./components/ShoppingDetailItem/ShoppingDetailItem";

function App() {
  const { isOpen } = useSelector((state) => state.checkout);

  return (
    <BrowserRouter>
      <div className="mb-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<ShoppingContainer />} />
          <Route path="/detail/:id" element={<ShoppingDetailItem />} />
        </Routes>
        {/* if isOpen is true the CheckOut component is rendered */}
        {isOpen && <CheckOut />}
      </div>
    </BrowserRouter>
  );
}

export default App;
