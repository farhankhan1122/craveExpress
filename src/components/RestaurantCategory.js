import ItemList from "./ItemList";
import { useState } from "react";
import arrow from "../../public/icons/arrow.svg"

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
          <span>
            <img className="w-[20px] h-[20px]" src={arrow} />
          </span>
        </div>
        { showItem && <ItemList items={data?.itemCards} />}
      </div>
      {/* Accordion  Body */}
    </div>
  );
};

export default RestaurantCategory;
