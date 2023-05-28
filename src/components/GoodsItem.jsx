import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { cartActoins } from "../redux/goods/cartSlice";

const GoodsItem = ({ item }) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    price,
    category,
    image,
    rating,
    description,
    quantity,
    totalPrice,
  } = item;

  const onItemAddToCart = () => {
    const newItem = {
      ...item,
      quantity: 1,
      totalPrice: price,
    };

    dispatch(cartActoins.addItemToCart(newItem));

    toast.success("Item added to the cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <li style={{ width: "300px" }}>
      <img src={image} alt={title} />
      <p>Title: {title}</p>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
      <button type="button" onClick={onItemAddToCart}>
        Add to cart
      </button>
    </li>
  );
};

export default GoodsItem;
