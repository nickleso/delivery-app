import { Outlet } from "react-router-dom";
import ShopsNavigation from "../components/ShopsNavigation";

const Home = () => {
  return (
    <section>
      <h1>Shop page</h1>
      <ShopsNavigation />
      <Outlet />
    </section>
  );
};

export default Home;
