import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";
import ShopsPage from "./pages/ShopsPage";
import ShoppingCart from "./pages/ShoppingCart";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopsPage />} />
          <Route path="/shops/:shop" element={<ShopsPage />} />
          <Route path="/shop-cart" element={<ShoppingCart />} />
          <Route path="/history" element={<History />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
