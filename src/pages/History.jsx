import { useDispatch, useSelector } from "react-redux";
import { getIsLoading } from "../redux/selectors";
import { useEffect } from "react";
import { fetchHistory } from "../redux/operations";

import HistoryList from "../components/HistoryList";

const History = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    const searchOrders = () => {
      try {
        dispatch(fetchHistory());
      } catch (error) {
        console.log(error);
      }
    };

    searchOrders();
  }, [dispatch]);

  return (
    <section>
      <h1
        style={{
          paddingBottom: "20px",
        }}
      >
        History page
      </h1>

      {isLoading ? <Loader /> : <HistoryList />}
    </section>
  );
};

export default History;
