import { useSelector } from "react-redux";
import { getHistory } from "../redux/selectors";
import HistoryItem from "./HistoryItem";
import { StyledList } from "../styles/CardStyles.styled";

const HistoryList = () => {
  const history = useSelector(getHistory);

  return (
    <>
      {history.length > 0 && (
        <StyledList>
          {history.map((item) => (
            <HistoryItem key={item._id} item={item} />
          ))}
        </StyledList>
      )}
    </>
  );
};

export default HistoryList;
