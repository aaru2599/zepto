import './CartHeader.css'
const CartHeader = () => {
  return (
    <>
      {/* <div className="flex justify-between">
        <div className="flex">
          <h3 className="block font-norms typography_h3__vaaaJ   hidden mr-4 ml-3 md:block">
            Cart (1 Item)
          </h3>
          <div className="fixed left-0 top-12 w-full z-[102] w-full md:relative md:top-0 md:w-fit md:z-0">
            <div className="flex justify-center items-center bg-skin-success-light py-2 px-10 md:rounded md:py-1">
              <h5 className="block font-norms typography_h5__UTaxj   !font-heading">
                ₹18.51
              </h5>
              <p className="block font-norms typography_paragraph__I83Dc   pl-1">
                saved on this order
              </p>
            </div>
          </div>
        </div>
        <button
          className=" py-1 px-7 text-base button_btn-outlined__1mHW_ undefined border border-skin-primary !px-3 !rounded !tracking-normal mr-2 hidden md:block false "
          type="button"
        >
          <div className="flex justify-center items-center font-lato">
            Empty cart
          </div>
        </button>
      </div> */}
      
      
        <div className="cart-header  " >
          <img
            src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/9.1.0/images/cart/delivery-banner-icon.svg"
            alt=""
            loading="lazy"
            width="90"
            height="90"
            decoding="async"
            className="relative overflow-hidden false pt-3"
            style={{
              color: "transparent",
              objectFit: "contain",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <h5 className="block font-norms    pl-2 text-skin-base text-white pt-4 text-[1.1rem] font-[]">
            Delivering to you in <span className="font-heading font-[600]">11 mins</span>
          </h5>
        </div>
    </>
  );
};

export default CartHeader;
