import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavigationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 200px;
  padding: 20px;
`;

const ShopsNavigation = () => {
  return (
    <NavigationBox>
      <h3>Food shops</h3>
      <ul>
        <li>
          <NavLink to="/shops/bizarre-foods">Bizarre foods</NavLink>
        </li>
        <li>
          <NavLink to="/shops/yummy-day">Yummy day</NavLink>
        </li>
      </ul>

      <h3>Other shops</h3>
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
    </NavigationBox>
  );
};

export default ShopsNavigation;
