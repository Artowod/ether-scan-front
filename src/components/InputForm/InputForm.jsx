const InputForm = () => {
  return (
    <form onSubmit={this}>
      <input type="search" placeholder="Search..." />
      <select size="1" form required name="transaction[]">
        {/* <option disabled>Выберите героя</option> */}
        <option selected value="Address">
          Address
        </option>
        <option value="Sender">Sender</option>
        <option value="Receiver">Receiver</option>
        <option value="BlockId">Block Id</option>
      </select>
      <input type="submit" value="" />
    </form>
  );
};

export default InputForm;
