import { useDispatch } from "react-redux";

import { cartActoins } from "../redux/goods/cartSlice";

const CartItem = ({ item }) => {
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
      id,
      title,
      price,
      category,
      image,
      rating,
      description,
      quantity: 1,
      totalPrice: price,
    };

    dispatch(cartActoins.addItemToCart(newItem));
  };

  const onItemDeleteFromCart = () => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <li>
      <h3>{title}</h3>
      <img style={{ width: "100px" }} src={image} alt={title} />
      <b>Price: ${totalPrice}</b>

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
