import CartCustomInstruction from "../Atoms/Button/CustomInstruction/CartCustomInstruction";

const CartDeliveryInstruction = () => {
  const dataArray = [
    {
      alt: "bewareOfPets",
      src: "https://www.zeptonow.com/_next/image?url=https%3A%2F%2Fcdn.zeptonow.com%2Fapp%2Fimages%2Fbeware_of_pets.png%3Ftr%3Dw-150%2Cq-70&w=3840&q=75",
      title: "Beware Of Pets",
      description: "Delivery partner will be informed about the presence of pet(s)"
    }, {
      alt: "Do Not Ring The Bell",
      src:"https://www.zeptonow.com/_next/image?url=https%3A%2F%2Fcdn.zeptonow.com%2Fapp%2Fimages%2Fdo_not_ring_bell.png%3Ftr%3Dw-150%2Cq-70&w=640&q=75",
      title: "Do Not Ring The Bell",
      description: "Delivery partner will not ring the bell"
    }, {
      alt: "No Contact Delivery",
      src:"https://www.zeptonow.com/_next/image?url=https%3A%2F%2Fcdn.zeptonow.com%2Fapp%2Fimages%2Fno_contact_delivery.png%3Ftr%3Dw-150%2Cq-70&w=640&q=75",
      title: "No Contact Delivery",
      description: "Delivery partner will leave your order at your door"
    },
    {
      alt: "Return PET Bottles",
      src:"https://www.zeptonow.com/_next/image?url=https%3A%2F%2Fcdn.zeptonow.com%2Fapp%2Fimages%2Fno_contact_delivery.png%3Ftr%3Dw-150%2Cq-70&w=640&q=75",
      title: "Return PET Bottles",
      description: "Help us recycle plastic bottles by returning them to our delivery partner An Initiative by",
      addImg:"https://www.zeptonow.com/_next/image?url=https%3A%2F%2Fcdn.zeptonow.com%2Fapp%2Fimages%2Fcoca_cola_logo.png%3Ftr%3Dw-150%2Cq-70&w=640&q=75",
    },
  ]
  return (
    <div className="bg-white rounded p-4 ">
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-[0.875rem] font-bold">Delivery instructions</div>
          <p className="text-[0.75rem]  text-gray-600">Delivery partner will be notified</p>
        </div>
        <div>
         <CartCustomInstruction dataArray={dataArray}/>
        </div>
      </div>
    </div>
  );
};

export default CartDeliveryInstruction;
