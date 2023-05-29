import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { cartActoins } from "../redux/cartSlice";
import { getShoppingAvailable } from "../redux/selectors";
import {
  CardImage,
  ImageCardWrap,
  StyledItem,
} from "../styles/CardStyles.styled";

const GoodsItem = ({ item }) => {
  const shopIsAvailable = useSelector(getShoppingAvailable);

  // console.log(shopIsAvailable);

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
    <StyledItem>
      <ImageCardWrap>
        <CardImage src={image} alt={title} />
      </ImageCardWrap>

      <b>Title: {title}</b>
      <b>Price: ${price}</b>
      <p>Description: {description}</p>

      <button
        style={{
          marginTop: "auto",
        }}
        type="button"
        onClick={onItemAddToCart}
      >
        Add to cart
      </button>
    </StyledItem>
  );
};

export default GoodsItem;
