import styled from "@emotion/styled";

export const StyledList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
  }
`;

export const StyledItem = styled.li`
  padding: 20px;
  position: relative;
  background: #ffffff;
  gap: 12px;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 376px;
  }

  @media screen and (min-width: 1280px) {
    width: 328px;
  }
`;

export const ImageCardWrap = styled.div`
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 288px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 288px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 288px;
  }
`;

export const CardImage = styled.img`
  object-fit: ${({ category }) => {
    switch (category) {
      case "Yummy day":
        return "cover";
      case "Bizarre foods":
        return "cover";
      default:
        return "contain";
    }
  }};

  aspect-ratio: 280/288;

  @media screen and (min-width: 768px) {
    aspect-ratio: 336/288;
  }

  @media screen and (min-width: 1280px) {
    aspect-ratio: 288/288;
  }
`;
