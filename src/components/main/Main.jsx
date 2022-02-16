import InputForm from "../InputForm";
import Transactions from "../Transactions";
import { useEffect, useState } from "react";
import * as dbRequests from "../../shared/services/Api.jsx";
import Notiflix from "notiflix";

const Main = () => {
  const [transactions, setTransactions] = useState([]);
  const shareTransactions = (updatedTransactions) => {
    setTransactions(updatedTransactions);
  };

  useEffect(() => {
    dbRequests
      .status()
      .then(({ status }) => {
        if (!status)
          Notiflix.Notify.warning(
            "Updating has been stopped on Server. Please refresh the page.",
            {
              timeout: 6000,
            }
          );
      })
      .catch((err) => {
        Notiflix.Notify.warning(err.response, {
          timeout: 3000,
        });
      });
  });

  return (
    <main className="main">
      <div className="main__wrapper">
        <div className="main__form-wrapper">
          <InputForm filteredData={shareTransactions} />
        </div>
        <div className="main__transactions-wrapper">
          <Transactions filteredData={transactions} />
        </div>
      </div>
    </main>
  );
};

export default Main;
