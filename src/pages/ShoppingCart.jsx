import { useSelector } from "react-redux";
import { getCart, getCartTotal } from "../redux/selectors";

import CartItem from "../components/CartItem";
import UserForm from "../components/UserForm/UserForm";

const ShoppingCart = () => {
  const cart = useSelector(getCart);
  const cartTotal = useSelector(getCartTotal);

  return (
    <section>
      <h1 style={{ paddingBottom: "20px" }}>Shop cart</h1>

      {cart.length > 0 ? (
        <>
          <div style={{ display: "flex", gap: "20px" }}>
            <UserForm />

            <div>
              <ul>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>

              <h3>Summary</h3>
              <b>Total: ${cartTotal.toFixed(2)}</b>
            </div>
          </div>
        </>
      ) : (
        <b>Cart is embty, make some orders!</b>
      )}
    </section>
  );
};

export default ShoppingCart;
