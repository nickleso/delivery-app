import { useDispatch } from "react-redux";

import SearchBar from "./SearchBar";
import { StyledSearchBox } from "./HistorySearch.styled";
import {
  fetchHistoryByEmail,
  fetchHistoryByName,
} from "../../redux/operations";

import { toast } from "react-toastify";

const HistorySearch = () => {
  const dispatch = useDispatch();

  const searchHistoryByName = (name) => {
    try {
      dispatch(fetchHistoryByName(name));
    } catch (error) {
      console.log(error);
    }
  };

  const searchHistoryByEmail = (email) => {
    try {
      dispatch(fetchHistoryByEmail(email));
    } catch (error) {
      console.log(error);
    }
  };

  const onNameFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const normilizedValue = form.elements.name.value;

    if (normilizedValue.trim() === "") {
      alert("Type something!");
      return;
    }

    searchHistoryByName(normilizedValue);
    form.reset();
  };

  const onEmailFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const normilizedValue = form.elements.email.value;

    if (normilizedValue.trim() === "") {
      alert("Type something!");
      return;
    }

    searchHistoryByEmail(normilizedValue);
    form.reset();
  };

  return (
    <StyledSearchBox>
      <SearchBar
        onFormSubmit={onNameFormSubmit}
        inputName="name"
        placeholder="search by name"
      />
      <SearchBar
        onFormSubmit={onEmailFormSubmit}
        inputName="email"
        placeholder="search by email"
      />
    </StyledSearchBox>
  );
};

export default HistorySearch;
