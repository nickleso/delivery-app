import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getCart, getCartTotal } from "../redux/goods/selectors";
import CartItem from "../components/CartItem";

const ShoppingCart = () => {
  const cart = useSelector(getCart);
  const cartTotal = useSelector(getCartTotal);

  const onCartSubmit = () => {
    console.log("cart submit");

    toast.success("Cart submitted!", {
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
    <section>
      <h1>Shop cart:</h1>

      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div>
            <h3>Summary</h3>
            <b>Total: ${cartTotal.toFixed(2)}</b>
            <button onClick={onCartSubmit}>Submit</button>
          </div>
        </>
      ) : (
        <p>Cart is empty(</p>
      )}
    </section>
  );
};

export default ShoppingCart;
