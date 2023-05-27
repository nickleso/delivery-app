import { useDispatch } from "react-redux";

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
