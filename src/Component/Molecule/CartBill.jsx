const CartBill = (cartData) => {
  console.log("cardDataBill", cartData.cartData.data);
  const tot_og_price = cartData.cartData.data.reduce(
    (acc, curr) => acc + Number(curr.product_og_price * curr.count),
    0
  );
  const tot_dis_price = cartData.cartData.data.reduce(
    (acc, curr) => acc + Number(curr.product_dis_price * curr.count),
    0
  );
  console.log("totalPrice", tot_og_price);
  console.log("tot_dis_price", tot_dis_price);
  return (
    <div className="px-4 py-6 bg-white rounded">
      <div>
        <div className="border-b flex  flex-col gap-5">
          <div>
            <div className="font-semibold flex text-[.875rem] justify-between">
              <div className="">Total Items</div>
              <div className="flex gap-1">
                <div className="line-through  text-[#958e9a]">
                  &#8377;{tot_og_price}
                </div>
                <div>&#8377;{tot_dis_price}</div>
              </div>
            </div>
            <div className="text-[12px] flex flex-col gap-[4px] text-[#958e9a]">
              <div className="flex justify-between">
                <div className="flex">
                  <div>Small Cart Fee</div>
                  <div>*</div>
                </div>
                <div className="flex gap-1">
                  <div className="line-through">&#8377;74</div>
                  <div className="text-[#46ca7b]">&#8377;59</div>
                </div>
              </div>{" "}
              <div className="flex justify-between">
                <div className="flex">
                  <div>Handling Charge</div>
                  <div>*</div>
                </div>
                <div className="flex gap-1">
                  <div className="line-through">&#8377;74</div>
                  <div className="text-[#46ca7b]">&#8377;59</div>
                </div>
              </div>{" "}
              <div>
                <div className="flex justify-between">
                  <div className="flex">
                    <div>Delivery Fee</div>
                    <div>*</div>
                  </div>
                  <div>
                    <div className="flex">
                      <div>&#8377;59</div>
                    </div>
                  </div>
                </div>
                <div className="text-[#46ca7b]">
                  Add products worth ₹90 to get free delivery
                </div>
              </div>
            </div>
          </div>

          <div className="flex text-[.875rem] justify-between">
            <div className="">Total Bill</div>
            <div>&#8377;59</div>
          </div>
        </div>
        <div className="border-b py-2">
          <div className=" flex flex-col gap-3">
            <div className="flex justify-between text-[0.8125rem] text-[#46ca7b] ">
              <div>Zepto Cash</div>
              <div>&#8377;50</div>
            </div>
            <div className="flex justify-between">
              <div>To Pay</div>
              <div>&#8377;50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBill;
