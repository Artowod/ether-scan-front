import InputForm from "../InputForm";
import Transactions from "../Transactions";
import { useState } from "react";

const Main = () => {
  const [transactions, setTransactions] = useState([]);
  const shareTransactions = (updatedTransactions) => {
    setTransactions(updatedTransactions);
  };

  return (
    <main className="main">
      <div className="main__wrapper">
        <div className="main__form-wrapper">
          <InputForm searchData={shareTransactions} />
        </div>
        <div className="main__transactions-wrapper">
          <Transactions data={transactions} />
        </div>
      </div>
    </main>
  );
};

export default Main;
