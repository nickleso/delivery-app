import { useSelector } from "react-redux";
import { getGoodsFromShop } from "../redux/selectors";
import GoodsItem from "./GoodsItem";
import { StyledList } from "../styles/CardStyles.styled";

const GoodsList = ({ shop }) => {
  const goods = useSelector(getGoodsFromShop);

  const shopsNamePrittier = () => {
    switch (shop) {
      case "yummy-day":
        return "Yummy day";
      case "bizarre-foods":
        return "Bizarre foods";
      case "electro-world":
        return "Electro world";
      case "desert-rings":
        return "Desert rings";
      case "mens-clothing":
        return "Men's clothing";
      case "womens-clothing":
        return "Women's clothing";
      default:
        return shop;
    }
  };

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
            {shopsNamePrittier()}
          </h2>
          <StyledList>
            {goods.map((item) => (
              <GoodsItem key={item._id} item={item} quantity={1} />
            ))}
          </StyledList>
        </div>
      )}
    </>
  );
};

export default GoodsList;
