import { useDispatch, useSelector } from "react-redux";
import { getGoodsFromShop } from "../redux/goods/selectors";
import GoodsItem from "./GoodsItem";

const GoodsList = ({ shop }) => {
  const goods = useSelector(getGoodsFromShop);

  return (
    <>
      {goods.length > 1 && (
        <div>
          <h2>Shop: {shop}</h2>
          <ul style={{ display: "flex" }}>
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
