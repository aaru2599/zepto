import "./CartCusIns.css";

const CartCustomInstruction = ({ dataArray }) => {
  //////console.log("dataArray",dataArray);
  ////////console.log("data",data);
  return (
    <div>
      <div className="flex justify-between scrollable-data overflow-hidden overflow-x-scroll ">
        {dataArray.map((item, index) => (
          <button
            key={index}
            className="mr-2 rounded-lg border border-skin-muted/50 flex flex-col w-fit p-2 false"
          >
            <div className="flex">
              <img
                alt={item.alt}
                width={50}
                height={40}
                className="relative overflow-hidden false w-6 h-6 false"
                src={item.src}
                style={{ color: "transparent", objectFit: "contain" }}
              />
              <p className=" text-[0.8125rem] block font-norms typography_paragraph-medium__m1w1_   undefined">
                {item.title}
              </p>
            </div>
            {/* <div className="w-[11rem] text-left pl-2">
              <p className="text-[0.75rem] font-[400] text-gray-500 block font-norms typography_paragraph-small__Cqv9t   !text-2xs md:!text-xs !text-skin-primary-void/50 pt-1">
                {item.description}
              </p>
              {item.addImg && (
                <div className="flex  mt-2">
                  <p className="block font-norms typography_paragraph-small__Cqv9t   !text-2xs md:!text-xs !text-skin-primary-void/50">
                    An Initiative by
                  </p>
                  <img
                    alt={item.logoAlt}
                    //   loading="lazy"
                    width={150}
                    height={40}
                    className="relative overflow-hidden false w-10 h-3 md:w-12 md:h-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    srcSet={item.logoSrcSet}
                    src={item.addImg}
                    style={{ color: "transparent", objectFit: "contain" }}
                  />
                </div>
              )}
            </div> */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CartCustomInstruction;
