const HistoryItem = ({ item }) => {
  const { name, cart, cartTotal } = item;

  return (
    <li>
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
    </li>
  );
};

export default HistoryItem;
