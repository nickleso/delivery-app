import { useDispatch, useSelector } from "react-redux";
import { getGoodsFromShop } from "../redux/selectors";
import GoodsItem from "./GoodsItem";

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
          <ul
            style={{
              padding: "20px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {goods.map((item) => (
              <GoodsItem key={item.id} item={item} quantity={1} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default GoodsList;
