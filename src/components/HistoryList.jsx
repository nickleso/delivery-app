import { useSelector } from "react-redux";
import { getHistory } from "../redux/selectors";
import HistoryItem from "./HistoryItem";

const HistoryList = () => {
  const history = useSelector(getHistory);

  return (
    <>
      {history.length > 0 && (
        <ul
          style={{
            padding: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {history.map((item) => (
            <HistoryItem key={item._id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default HistoryList;
