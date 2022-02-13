import SingleTransaction from "./SingleTransaction";

const Transactions = () => {
  const transactions = [
    { type: "type", amount: "amount", currency: "value" },
    { type: "type", amount: "amouhdfhfdnt", currency: "value" },
    { type: "type", amount: "amount", currency: "dfh" },
    { type: "tbdbfdype", amount: "amount", currency: "valhdhue" },
    { type: "type", amount: "amofddbfunt", currency: "value" },
    { type: "type", amount: "amount", currency: "value" },
    { type: "type", amount: "amouncvncvt", currency: "value" },
  ];

  const oneTransaction = transactions.map(({ id, ...props }) => (
    <SingleTransaction key={id} {...props} />
  ));
  return (
    <>
      <div className="main__transactions-table-wrapper">
        <table className="main__transactions-table">
          <thead className="main__transactions-header">
            <tr>
              <th className="main__transactions-column">Block number</th>
              <th className="main__transactions-column">Transaction ID</th>
              <th className="main__transactions-column">Sender address</th>
              <th className="main__transactions-column">Recepient address</th>
              <th className="main__transactions-column">Block confirmations</th>
              <th className="main__transactions-column">Date</th>
              <th className="main__transactions-column">Value</th>
              <th className="main__transactions-column">Transaction Fee</th>
            </tr>
          </thead>
          <tbody>{oneTransaction}</tbody>
        </table>
      </div>
      <div className="main__pagination">PAGINATION</div>
    </>
  );
};

export default Transactions;
