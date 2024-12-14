import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItem, setShowIndex}) => {
    // const [showItem , setShowItem] = useState(false)
    console.log(data,"data")

  const handleClick = () => {
    setShowIndex()
  }

  return (
    <div className="bg-gray-50">
      {/* Accordion Header */}
      <div className="w-full px-[10px] py-[5px] bg-white my-[15px]">
        <div onClick={handleClick} className="flex justify-between items-center cursor-pointer">
          <span className="text-[18px] tracking-[-0.3px] text-textcolor font-[700]">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        { showItem && <ItemList items={data?.itemCards} />}
      </div>
      {/* Accordion  Body */}
    </div>
  );
};

export default RestaurantCategory;
