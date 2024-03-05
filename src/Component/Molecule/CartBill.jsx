import { useState } from "react";

const CartBill = (cartData) => {
  const [smCartFee, setSmCartFee] = useState(35);
  const [handlingCharge, setHandlingCharge] = useState(5.49);
  const [delChrg, setDelChrg] = useState(25);

 
  //////console.log("cardDataBill", cartData.cartData.data);
  const tot_og_price = cartData.cartData.data.reduce(
    (acc, curr) => acc + Number(curr.product_og_price * curr.count),
    0
  );
  const tot_dis_price = cartData.cartData.data.reduce(
    (acc, curr) => acc + Number(curr.product_dis_price * curr.count),
    0
  );

  let totalBill = tot_dis_price + handlingCharge;
  if (tot_og_price < 49) {
    totalBill = totalBill + smCartFee;
  }
  if (tot_dis_price < 149) {
    totalBill = totalBill + delChrg;
  }
  ////console.log("totalBill",totalBill);
  ////console.log("totalPrice", tot_og_price);
  ////console.log("tot_dis_price", tot_dis_price);
  return (
    <div className="px-4 py-6 bg-white rounded">
      <div>
        <div className="border-b flex  flex-col gap-5">
          <div>
            <div
              style={{ fontWeight: "500" }}
              className=" flex text-[.875rem] justify-between"
            >
              <div className="">Total Items</div>
              <div className="flex gap-1">
                {tot_og_price > 0 && (
                  <div className="line-through  text-[#958e9a]">
                    &#8377;{tot_og_price}
                  </div>
                )}
                <div>&#8377;{tot_dis_price}</div>
              </div>
            </div>
            <div className="text-[12px] flex flex-col gap-[4px] text-[#958e9a]">
              {tot_dis_price <= 100 && (
                <div className="flex justify-between">
                  <div className="flex">
                    <div>Small Cart Fee</div>
                    <div>*</div>
                  </div>
                  {tot_dis_price > 49 ? (
                    <div className="flex gap-1">
                      <div className="line-through">&#8377;{smCartFee}</div>
                      <div className="text-[#46ca7b]">&#8377;0</div>
                    </div>
                  ) : (
                    <div className="text-[#46ca7b]">&#8377;35</div>
                  )}
                </div>
              )}{" "}
              <div className="flex justify-between">
                <div className="flex">
                  <div>Handling Charge</div>
                  <div>*</div>
                </div>
                <div className="flex gap-1">
                  <div className="line-through">&#8377;15</div>
                  <div className="text-[#46ca7b]">&#8377;{handlingCharge}</div>
                </div>
              </div>{" "}
              <div>
                <div className="flex justify-between">
                  <div className="flex">
                    <div>Delivery Fee</div>
                    <div>*</div>
                  </div>
                  <div>
                    {tot_dis_price > 149 ? (
                      <div className="flex">
                        <div className="text-[#46ca7b]">&#8377;0</div>
                      </div>
                    ) : (
                      <div className="flex">
                        <div>&#8377;{delChrg}</div>
                      </div>
                    )}
                  </div>
                </div>
                {tot_dis_price < 149 && (
                  <div className="text-[#46ca7b]">
                    Add products worth {149 - tot_dis_price} to get free
                    delivery
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex text-[.875rem] justify-between">
            <div className="">Total Bill</div>
            <div className="font-[700]">&#8377;{totalBill.toFixed(2)}</div>
          </div>
        </div>
        <div className="border-b py-2">
          <div className=" flex flex-col gap-3">
            <div className="flex justify-between text-[0.8125rem] text-[#46ca7b] ">
              <div>Zepto Cash</div>
              <div>&#8377;-50</div>
            </div>
            <div className="flex justify-between">
              <div>To Pay</div>
              <div className="font-[700]">&#8377;{(totalBill-50).toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBill;
