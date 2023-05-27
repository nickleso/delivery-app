import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <nav style={{ display: "flex", gap: "8px" }}>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/shop-cart">Shop cart</NavLink>
        <NavLink to="/history">History</NavLink>
      </nav>
    </header>
  );
};

export default Header;
