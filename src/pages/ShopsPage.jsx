import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoodsByCategory } from "../redux/operations";
import { getIsLoading } from "../redux/selectors";

import ShopsNavigation from "../components/ShopsNavigation";
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
          case "yummy-day":
            dispatch(fetchGoodsByCategory("Yummy day"));
            break;
          case "bizarre-foods":
            dispatch(fetchGoodsByCategory("Bizarre foods"));
            break;

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
        }
      } catch (error) {
        console.log(error);
      }
    };

    searchGoodsInShop();
  }, [shop, dispatch]);

  return (
    <section>
      <h1>Shop page</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <ShopsNavigation />

        {isLoading ? <Loader /> : <GoodsList shop={shop} />}
      </div>
    </section>
  );
};

export default ShopsPage;
