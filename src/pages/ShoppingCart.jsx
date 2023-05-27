import { useSelector } from "react-redux";
import { getCart, getCartTotal } from "../redux/goods/selectors";
import CartItem from "../components/CartItem";

const ShoppingCart = () => {
  const cart = useSelector(getCart);
  const cartTotal = useSelector(getCartTotal);
  console.log("cartTotal", cartTotal);
  console.log("cart", cart);

  const onCartSubmit = () => {
    console.log("cart submit");
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
            <b>Total: ${cartTotal}</b>
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
