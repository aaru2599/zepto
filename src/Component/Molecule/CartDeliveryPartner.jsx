import DeliveryButton from "../Atoms/Button/AmountButton";

const CartDeliveryPartner = () => {
  const priceData = [
    {
      priceImg:
        "https://www.zeptonow.com/_next/image?url=%2Fimages%2Fcart%2Frider-tip%2F1000.png&w=640&q=75",
      priceAmt: "10",
    },
    {
      priceImg:
        "https://www.zeptonow.com/_next/image?url=%2Fimages%2Fcart%2Frider-tip%2F1000.png&w=640&q=75",
      priceAmt: "20",
    },
    {
      priceImg:
        "https://www.zeptonow.com/_next/image?url=%2Fimages%2Fcart%2Frider-tip%2F3500.png&w=640&q=75",
      priceAmt: "35",
    },
    {
      priceImg:
        "https://www.zeptonow.com/_next/image?url=%2Fimages%2Fcart%2Frider-tip%2F3500.png&w=640&q=75",
      priceAmt: "50",
    },
  ];
  return (
    <div className="bg-white rounded p-4 flex flex-col gap-2">
      <h4 className="font-bold">Delivery Partner Tip</h4>
      <p className="text-sm text-gray-600">The entire amount will be sent to your delivery partner</p>
      <DeliveryButton priceData={priceData}/>
    </div>
  );
};

export default CartDeliveryPartner;
