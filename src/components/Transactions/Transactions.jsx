import SingleTransaction from "./SingleTransaction";
import { v4 as uuidv4 } from "uuid";
import Paginate from "./Paginate";

const Transactions = ({ filteredData }) => {
  let transactions = [];
  console.log(filteredData);
  if (!Array.isArray(filteredData)) {
    transactions.push(filteredData);
  } else {
    transactions = filteredData;
  }

  const oneTransaction = transactions
    ? transactions.map((data) => (
        <SingleTransaction id={uuidv4()} data={data} />
      ))
    : [];
  return (
    <>
      <div className="main__transactions-table-wrapper">
        <table className="main__transactions-table">
          <thead className="main__transactions-header">
            <tr>
              <th className="main__transactions-column">Block number</th>
              <th className="main__transactions-column">Transaction ID</th>
              <th className="main__transactions-column">Sender address</th>
              <th className="main__transactions-column">Recipient address</th>
              <th className="main__transactions-column">Block confirmations</th>
              <th className="main__transactions-column">Date</th>
              <th className="main__transactions-column">Value</th>
              <th className="main__transactions-column">Transaction Fee</th>
            </tr>
          </thead>
          {filteredData && <tbody>{oneTransaction}</tbody>}
        </table>
      </div>
      <div className="main__pagination">
        <Paginate />
      </div>
    </>
  );
};

export default Transactions;
