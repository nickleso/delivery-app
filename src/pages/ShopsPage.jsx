import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoodsByCategory } from "../redux/goods/goodsOperations";
import { getIsLoading } from "../redux/goods/selectors";

import GoodsList from "../components/GoodsList";
import Loader from "../components/Loader";

const ShopsPage = () => {
  const { shop } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    const searchGoodsInShop = () => {
      try {
        switch (shop) {
          case "electro-world":
            dispatch(fetchGoodsByCategory("electronics"));
            break;
          case "desert-rings":
            dispatch(fetchGoodsByCategory("jewelery"));
            break;
          case "mens-clothing":
            dispatch(fetchGoodsByCategory("men's clothing"));
            break;
          case "womens-clothing":
            dispatch(fetchGoodsByCategory("women's clothing"));
            break;

          // default:
          //   dispatch(fetchGoodsByCategory("electronics"));
          //   break;
        }
      } catch (error) {
        console.log(error);
      }
    };

    searchGoodsInShop();
  }, [shop, dispatch]);

  return <>{isLoading ? <Loader /> : <GoodsList shop={shop} />}</>;
};

export default ShopsPage;
