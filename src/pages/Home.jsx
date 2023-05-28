import { Outlet } from "react-router-dom";
import ShopsNavigation from "../components/ShopsNavigation";

const Home = () => {
  return (
    <section>
      <h1>Shop page</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <ShopsNavigation />
        <Outlet />
      </div>
    </section>
  );
};

export default Home;
