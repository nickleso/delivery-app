import { NavLink } from "react-router-dom";

const ShopsNavigation = () => {
  return (
    <div style={{ minWidth: "200px", padding: "20px" }}>
      <h2>Food shops:</h2>
      <h2>Other shops:</h2>
      <ul>
        <li>
          <NavLink to="/shops/electro-world">Electro world</NavLink>
        </li>
        <li>
          <NavLink to="/shops/desert-rings">Desert rings</NavLink>
        </li>
        <li>
          <NavLink to="/shops/mens-clothing">Men's clothing</NavLink>
        </li>
        <li>
          <NavLink to="/shops/womens-clothing">Women's clothing</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ShopsNavigation;
