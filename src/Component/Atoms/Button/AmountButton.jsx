const DeliveryButton = (props) => {
  ////console.log("props", props);
  const data = props.priceData;
  
  ////console.log(data);

  return (
    <>
      <div className="flex  gap-4">
      {props.priceData.map((items,index) => 
        <button key={index} className="flex border justify-center gap-1 px-7 py-1 rounded-full items-center border-gray-200">
          <div>
            <img src={items.priceImg} alt="" />
          </div>
          <div className="text-sm text-gray-700">{items.priceAmt}</div>
        </button>
      )}
      </div>
    </>
  );
};

export default DeliveryButton;
