// CardButton.jsx
import { useDispatch } from "react-redux";
import { updateCartQuantity } from "../../Redux/Cart/CartSlice";

const CardButton = ({ item }) => {
  const dispatch = useDispatch();

  const onClickDecrease = (productId) => {
    dispatch(updateCartQuantity({ productId, quantity: item.count - 1 }));
  };

  const onIncrement = (productId) => {
    dispatch(updateCartQuantity({ productId, quantity: item.count + 1 }));
  };

  return (
    <>
      <button
        onClick={() => onClickDecrease(item.product_id)}
        className="font-bold px-3 text-white border-r-2 text-[1rem] border-btnBorder "
      >
        -
      </button>
      <div className="font-bold px-2 text-[1rem] text-white">{item.count}</div>
      <button
        onClick={() => onIncrement(item.product_id)}
        className="font-bold px-3 border-l-2 text-[1rem] text-white border-btnBorder"
      >
        +
      </button>
    </>
  );
};

export default CardButton;
