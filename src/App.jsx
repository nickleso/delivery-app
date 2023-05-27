import { Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import ShopsPage from "./pages/ShopsPage";
import ShoppingCart from "./pages/ShoppingCart";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />}>
          <Route path="/shops/:shop" element={<ShopsPage />} />
        </Route>
        <Route path="/shop-cart" element={<ShoppingCart />} />
        <Route path="/history" element={<History />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
