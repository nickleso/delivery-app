import { StyledItem } from "../styles/CardStyles.styled";

const HistoryItem = ({ item }) => {
  const { name, cart, cartTotal } = item;

  return (
    <StyledItem>
      <h3>Order by: {name}</h3>

      <ul>
        {cart.map(({ id, title, category, image, quantity, totalPrice }) => (
          <li key={id}>
            <p>Shop: {category}</p>
            <img style={{ width: "200px" }} src={image} alt={title} />
            <p>Title: {title}</p>
            <p>Quantity: {quantity}</p>
            <p>Total price: ${totalPrice}</p>
          </li>
        ))}
      </ul>

      <b>Cart total: ${cartTotal}</b>
    </StyledItem>
  );
};

export default HistoryItem;
