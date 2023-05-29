import { useDispatch } from "react-redux";
import { cartActoins } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const {
    _id,
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
  };

  const onItemDeleteFromCart = () => {
    dispatch(cartActoins.removeItemFromCart(_id));
  };

  return (
    <li>
      <h3>{title}</h3>
      <img style={{ width: "100px" }} src={image} alt={title} />
      <p>Price per item: ${price.toFixed(2)}</p>
      <p>Total price: ${totalPrice.toFixed(2)}</p>

      <div>
        <div>
          x <span>{quantity}</span>
        </div>
        <div>
          <button onClick={onItemDeleteFromCart}>-</button>
          <button onClick={onItemAddToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
