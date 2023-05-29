import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { cartActoins } from "../redux/cartSlice";
import { getShoppingAvailable } from "../redux/selectors";

const GoodsItem = ({ item }) => {
  const shopIsAvailable = useSelector(getShoppingAvailable);

  console.log(shopIsAvailable);

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

    if (!shopIsAvailable) {
      toast.error("At first, submit your cart from previous shop!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

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
