import InputForm from "../InputForm";
import Transactions from "../Transactions";

const Main = () => {
  return (
    <main className="main">
      <div className="main__wrapper">
        <div className="main__form-wrapper">
          <InputForm />
        </div>
        <div className="main__transactions-wrapper">
          <Transactions />
        </div>
      </div>
    </main>
  );
};

export default Main;
