import * as dbRequests from "../../shared/services/Api.jsx";
import { useState } from "react";

const InputForm = ({ searchData }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("Address");

  const onSubmit = (event) => {
    event.preventDefault();
    const transactionId =
      "0x86467d040e81a96a4438d844c486f588e079fcd1d220c8dbdf1780be74d27833";

    console.log(selectValue);
    switch (selectValue) {
      case "Address":
        // DONE
        dbRequests
          .getTransactionById(inputValue)
          .then(({ data }) => {
            console.log(data.result);
            searchData(data.result);
          })
          .catch((err) => {
            console.log("Error", err);
          });
        break;
      case "Sender":
        dbRequests
          .getTransactionsBySenderAddr(inputValue)
          .then(({ data }) => {
            console.log(data.result);
            searchData(data.result);
          })
          .catch((err) => {
            console.log("Error", err);
          });
        break;
      case "Receiver":
        dbRequests
          .getTransactionsByRecipientAddr(inputValue)
          .then(({ data }) => {
            console.log(data.result);
            searchData(data.result);
          })
          .catch((err) => {
            console.log("Error", err);
          });
        break;
      case "BlockId":
        // DONE
        dbRequests
          .getTransactionsByBlockNum(inputValue)
          .then(({ data }) => {
            console.log(data.result);
            searchData(data.result);
          })
          .catch((err) => {
            console.log("Error", err);
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
    <form onSubmit={onSubmit}>
      <input
        className="main__search-input"
        type="search"
        placeholder="Search..."
        value={inputValue}
        onChange={handleKeyPress}
      />
      <select size="1" required name="transaction[]" onChange={handleSelect}>
        {/* <option disabled>Выберите героя</option> */}
        <option value="Address">Address</option>
        <option value="Sender">Sender</option>
        <option value="Receiver">Receiver</option>
        <option value="BlockId">Block Id</option>
      </select>
      <input className="main__submit-btn" type="submit" value="" />
    </form>
  );
};

export default InputForm;
