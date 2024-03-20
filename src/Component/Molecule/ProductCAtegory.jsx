import { useState } from "react";

const ProductCategory = () => {
  const categoryData = [
    {
      catId: 0,
      catName: "All",
      catDes: "Buy Fresh Fruits Online",
      catImage:
        "https://cdn.zeptonow.com/production///tr:w-90,ar-614-406,pr-true,f-auto,q-80/cms/sub_category/d7af2fc0-df96-430a-8393-1a96cb9959e5.png",
    },
    {
      catId: 1,
      catName: "Fresh Fruits",
      catDes: "Buy Fresh Fruits Online",
      catImage:
        "https://cdn.zeptonow.com/production///tr:w-90,ar-490-490,pr-true,f-auto,q-80/cms/sub_category/1131bbae-c3b2-4aab-8864-fbc9069112ab.jpeg",
    },
    {
      catId: 2,
      catName: "Fresh Vegetables",
      catDes: "Buy Fresh Vegetables Online",
      catImage:
        "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-auto,q-80/inventory/subcategory/b8c5ef63-3e40-4cdc-814b-e14de2e60780-Onion.png",
    },
    {
      catId: 3,
      catName: "Exotics & Premium",
      catDes: "Buy Exotics & Premium Online",
      catImage:
        "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-auto,q-80/cms/sub_category/Blueberry%20(1).png",
    },
    {
      catId: 4,
      catName: "Leafy, Herbs & Seasonings",
      catDes: "Buy Leafy, Herbs & Seasonings Online",
      catImage:
        "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-auto,q-80/cms/sub_category/Spinach%20(1).png",
    },
    {
      catId: 5,
      catName: "Organics & Hydroponics",
      catDes: "Buy Organics & Hydroponics Online",
      catImage:
        "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-auto,q-80/cms/sub_category/Organic%20.png",
    },
    {
      catId: 6,
      catName: "Cuts & Sprouts",
      catDes: "Buy Cuts & Sprouts Online",
      catImage:
        "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-auto,q-80/cms/sub_category/Juice%20Bottle%20(1).png",
    },
    {
      catId: 7,
      catName: "Flowers & Leaves",
      catDes: "Buy Flowers & Leaves Online",
      catImage:
        "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-auto,q-80/cms/sub_category/Marigold%20&%20Rose%20(1).png",
    },
    {
      catId: 8,
      catName: "Dried Fruits",
      catDes: "Buy Dried Fruits Online",
      catImage:
        "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-auto,q-80/cms/sub_category/Dates%20(1).png",
    },
    {
      catId: 9,
      catName: "Gardening",
      catDes: "Buy Gardening Online",
      catImage:
        "https://cdn.zeptonow.com/production///tr:w-90,ar-120-120,pr-true,f-auto,q-80/cms/sub_category/0934fa21-9e51-49b1-9c35-5f333c601b81.jpeg",
    },
    {
      catId: 10,
      catName: "Combos",
      catDes: "Combos",
      catImage:
        "https://cdn.zeptonow.com/production///tr:w-90,ar-500-500,pr-true,f-auto,q-80/inventory/subcategory/2e442da2-9218-49c5-9875-41abdd9d2210-FNV.png",
    },
  ];
  const [isBorder, setIsBorder] = useState(false);
  const btnClick = (categoryId) => {
    setIsBorder(categoryId);
  };
  //////console.log("isBorder",isBorder);
  return (
    <div className="mb-[250px]">
      {categoryData.map((item) => (
        <div
          key={item.catId}
          onClick={() => btnClick(item.catId)}
          className="md:p-1 border-r "
        >
          <div
            key={item.catId}
            className={` flex flex-col  items-center md:flex md:flex-row mb-4  md:mb-0 md:justify-start  justify-center  h-[60px]  md:p-4 hover:bg-[#ebd9ff]  hover:hover:cursor-pointer md:items-center md:gap-2 md:${
              isBorder === item.catId
                ? " md:border-l-4 border-[#9e38ae] bg-gradient-to-r from-purple-100 to-purple-200 font-bold text-[#9e38ae] "
                : " md:border-l-4 border-transparent"
            }`}
          >
            
             <div>
             <img
                src={item.catImage}
                className="rounded-full md:w-[40px] md:h-[40px] w-[35px] h-[35px] bg-white "
               
                alt=""
              />
             </div>
            <div className="text-[10px] md:w-32  md:text-[14px] text-center md:text-left ">{item.catName}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
