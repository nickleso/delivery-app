import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #d6d4d4;
  padding-bottom: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav style={{ display: "flex", gap: "36px" }}>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/shop-cart">Shop cart</NavLink>
        <NavLink to="/history">History</NavLink>
      </nav>
    </StyledHeader>
  );
};

export default Header;
