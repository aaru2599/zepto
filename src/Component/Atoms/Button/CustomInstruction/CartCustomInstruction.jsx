import './CartCusIns.css'

const CartCustomInstruction = ({dataArray}) => {

  console.log("dataArray",dataArray);
    //console.log("data",data);
  return (
    <div>
    <div className="flex justify-between scrollable-data overflow-hidden overflow-x-scroll ">
      {dataArray.map((item, index) => (
        <button key={index} className="mr-2 rounded-lg border border-skin-muted/50 flex justify-left items-start w-fit p-2 false">
          <img
            alt={item.alt}
            loading="lazy"
            width={50}
            height={40}
            // decoding="async"
            // data-nimg={1}
            className="relative overflow-hidden false w-6 h-6 false"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // srcSet={item.srcSet}
            src={item.src}
            style={{ color: "transparent", objectFit: "contain" }}
          />
          <div className="w-[11rem] text-left pl-2">
            <p className=" text-[0.8125rem] block font-norms typography_paragraph-medium__m1w1_   undefined">
              {item.title}
            </p>
            <p className="text-[0.75rem] font-[400] text-gray-500 block font-norms typography_paragraph-small__Cqv9t   !text-2xs md:!text-xs !text-skin-primary-void/50 pt-1">
              {item.description}
            </p>
            {item.addImg &&
              <div className="flex justify-left mt-2">
                <p className="block font-norms typography_paragraph-small__Cqv9t   !text-2xs md:!text-xs !text-skin-primary-void/50">
                  An Initiative by
                </p>
                <img
                  alt={item.logoAlt}
                //   loading="lazy"
                  width={150}
                  height={40}
                //   decoding="async"
                //   data-nimg={1}
                  className="relative overflow-hidden false w-10 h-3 md:w-12 md:h-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  srcSet={item.logoSrcSet}
                  src={item.addImg}
                  style={{ color: "transparent", objectFit: "contain" }}
                />
              </div>
            }
          </div>
        </button>
      ))}
    </div>
  </div>
  )
}

export default CartCustomInstruction