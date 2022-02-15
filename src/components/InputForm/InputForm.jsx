import * as dbRequests from "../../shared/services/Api.jsx";
import { useState } from "react";
import Notiflix from "notiflix";

const InputForm = ({ filteredData }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("Address");
  const [state, setState] = useState("ready");

  const onSubmit = (event) => {
    event.preventDefault();
    setState("pending");
    if (!inputValue) {
      Notiflix.Notify.warning("Please enter valid request.", {
        timeout: 4000,
      });
      setState("ready");
    } else
      switch (selectValue) {
        case "Address":
          dbRequests
            .getTransactionById(inputValue)
            .then(({ data }) => {
              if (data) {
                setState("ready");
                filteredData(data.result);
              }
            })
            .catch((err) => {
              Notiflix.Notify.warning(err.response.data.message, {
                timeout: 4000,
              });
            });
          break;
        case "Sender":
          dbRequests
            .getTransactionsBySenderAddr(inputValue)
            .then(({ data }) => {
              if (data) {
                setState("ready");
                filteredData(data.result);
              }
            })
            .catch((err) => {
              Notiflix.Notify.warning(err.response.data.message, {
                timeout: 4000,
              });
            });
          break;
        case "Receiver":
          dbRequests
            .getTransactionsByRecipientAddr(inputValue)
            .then(({ data }) => {
              if (data) {
                setState("ready");
                filteredData(data.result);
              }
            })
            .catch((err) => {
              Notiflix.Notify.warning(err.response.data.message, {
                timeout: 4000,
              });
            });
          break;
        case "BlockId":
          // DONE
          dbRequests
            .getTransactionsByBlockNum(inputValue)
            .then(({ data }) => {
              if (data) {
                setState("ready");
                filteredData(data.result);
              }
            })
            .catch((err) => {
              Notiflix.Notify.warning(err.response.data.message);
            });
          break;
        default:
          console.log("selectValue");
      }
  };

  const handleKeyPress = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelect = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <form className="main__form" onSubmit={onSubmit}>
      <input
        className="main__search-input"
        type="search"
        placeholder="Search..."
        value={inputValue}
        onChange={handleKeyPress}
      />
      <select
        className="main__form-select"
        size="1"
        required
        name="transaction[]"
        onChange={handleSelect}
      >
        <option value="Address">Address</option>
        <option value="Sender">Sender</option>
        <option value="Receiver">Receiver</option>
        <option value="BlockId">Block Id</option>
      </select>
      <input className="main__submit-btn" type="submit" value="" />
      {state === "pending" && <div className="main__loading">Loading...</div>}
    </form>
  );
};

export default InputForm;
