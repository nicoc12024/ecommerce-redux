import { items } from "../../itemsList";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

function ShoppingContainer() {
  return (
    <div className="mt-12 px-6 max-w-[1400px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
      {items.map((item) => {
        return <ShoppingItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ShoppingContainer;
