import { CDN_URL } from "../utils.js/constants";

const ItemList = ({ items }) => {
  console.log(items, "items");
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="w-full border-b-[1px] py-[25px] flex items-center justify-between"
        >
          <div className="flex flex-col ">
            <span className="text-[16px] tracking-[-0.3px] text-textcolor font-[700]">
              {item.card.info.name}
            </span>
            <span className="text-[14px] tracking-[-0.3px] text-textcolor font-[400]">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <span className="text-[14px] leading-[19px] mt-[12px] tracking-[-0.3px] text-textlightcolor font-[200]">
              {item.card.info.description}
            </span>
            {/* <hr /> */}
          </div>
          <div className="relative w-[156px] h-[144px] shrink-0 ml-[60px] bg-imageBackground rounded-[12px]">
            {item.card.info.imageId && (
              <img
                className="w-full h-full rounded-[12px]"
                src={CDN_URL + item?.card?.info?.imageId}
                alt=""
              />
            )}
            <button className="absolute bottom-[-10px] left-[50%] translate-x-[-50%] bg-white flex items-center justify-center px-[20px] leading-[24px] font-[800] text-[18px] text-greentextcolor border-[1px] border-buttonbordercolor rounded-[8px] h-[40px]">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
