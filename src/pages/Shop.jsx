// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { getAllProducts } from "../api/fakeStoreApi";

const Shop = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const searchAllProducts = async () => {
  //     try {
  //       const result = await getAllProducts();
  //       console.log(result.data);
  //       setProducts(result.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   searchAllProducts();
  // }, []);

  return (
    <section>
      <h1>Shop</h1>

      {/* <ul>
        {products.map(
          ({ id, title, price, category, image, rating, description }) => (
            <li key={id}>
              <img src={image} alt="rick and morty logo" />
              <p>{title}</p>
              <p>{description}</p>
            </li>
          )
        )}
      </ul> */}
    </section>
  );
};

export default Shop;
