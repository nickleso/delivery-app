import { useSelector } from "react-redux";
import { getGoodsFromShop } from "../redux/selectors";
import GoodsItem from "./GoodsItem";
import { StyledList } from "../styles/CardStyles.styled";

const GoodsList = ({ shop }) => {
  const goods = useSelector(getGoodsFromShop);

  return (
    <>
      {goods.length > 0 && (
        <div>
          <h2
            style={{
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            Shop: {shop}
          </h2>
          <StyledList>
            {goods.map((item) => (
              <GoodsItem key={item.id} item={item} quantity={1} />
            ))}
          </StyledList>
        </div>
      )}
    </>
  );
};

export default GoodsList;
