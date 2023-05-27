import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopCart from "./pages/ShopCart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-cart" element={<ShopCart />} />
      </Route>
    </Routes>
  );
}

export default App;
