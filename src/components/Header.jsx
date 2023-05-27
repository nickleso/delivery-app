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
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/shop-cart">Shop cart</NavLink>
      </nav>
    </header>
  );
};

export default Header;
