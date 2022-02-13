const SingleTransaction = ({
  blockNumber = 0,
  hash = 0x00,
  from = 0x00,
  to = 0x00,
  confirmations = 0,
  blockTimestamp = "dd/mm/YY",
  value = 0,
  transactionFee = 0,
}) => {
  blockNumber = +blockNumber.toString(10);
  value = +value.toString(10) / 1000000000 / 1000000000; // in Eth.

  return (
    <tr className="main__transaction-row">
      <td className="main__transactions-column">{blockNumber}</td>
      <td className="main__transactions-column">
        <a href="https://etherscan.io/">{hash}</a>
      </td>
      <td className="main__transactions-column">{from}</td>
      <td className="main__transactions-column">{to}</td>
      <td className="main__transactions-column">{confirmations}</td>
      <td className="main__transactions-column">{blockTimestamp}</td>
      <td className="main__transactions-column">{value}</td>
      <td className="main__transactions-column">{transactionFee}</td>
    </tr>
  );
};

export default SingleTransaction;

//     "blockHash": "0x98ee8d66bb7039c1428874a0277cc522e6c30c7484b85cec13574aa6c9eaea02",
//     "blockNumber": "0xd893df",
//     "from": "0x9abd11509bf8e1ae4271164cfed19103c65a0e2b",
//     "gas": "0x42fb2",  274354
//     "gasPrice": "0x1153dcc14b", 74421420363
//     "maxFeePerGas": "0x15a8f44b6b",  93028895595
//     "maxPriorityFeePerGas": "0x59682f00", 1500000000
//     "hash": "0xf8fb1081467225fbdbef07551bd942e93d9b6307fd880076814ff3098fc57d1d",
//     "input": "0xab834bab0000000000000000000000007be8076f4ea4a4ad08075c2508e481d6c946d12b0000000000000000000000009abd11509bf8e1ae4271164cfed19103c65a0e2b00000000000000000000000080f4ddb49751e950a25ac16009e4053bee04e8db0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000baf2127b49fc93cbca6269fade0f7f31df4c88a7000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007be8076f4ea4a4ad08075c2508e481d6c946d12b00000000000000000000000080f4ddb49751e950a25ac16009e4053bee04e8db00000000000000000000000000000000000000000000000000000000000000000000000000000000000000005b3256965e7c3cf26e11fcaf296dfc8807c01073000000000000000000000000baf2127b49fc93cbca6269fade0f7f31df4c88a70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003ac00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c3663566a580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006208220b00000000000000000000000000000000000000000000000000000000000000008e340b168a52c565c8b659ffc4e30290c681ac399c39560780939e24f1ccb0ba00000000000000000000000000000000000000000000000000000000000003ac00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c3663566a580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006207fa76000000000000000000000000000000000000000000000000000000006211355484b6c42015e36e6e7887ad8e360962e96bf484e1eb50101d05613571de14f19a0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000006a000000000000000000000000000000000000000000000000000000000000007c000000000000000000000000000000000000000000000000000000000000008e00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000b200000000000000000000000000000000000000000000000000000000000000b40000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000001c3338b89db518e48cbffa987b379ee21d78af82cc4f79a82eaf782d5199f51bb74bb4906dfed66f6503cfa275fcc29d05ca6782dcf63cb674250ab9895f3f25753338b89db518e48cbffa987b379ee21d78af82cc4f79a82eaf782d5199f51bb74bb4906dfed66f6503cfa275fcc29d05ca6782dcf63cb674250ab9895f3f2575000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e4fb16a59500000000000000000000000000000000000000000000000000000000000000000000000000000000000000009abd11509bf8e1ae4271164cfed19103c65a0e2b0000000000000000000000000a76dcd25c9edba6639d2b3f77f8ad522622f54800000000000000000000000000000000000000000000000000000000000001b7000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e4fb16a59500000000000000000000000080f4ddb49751e950a25ac16009e4053bee04e8db00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a76dcd25c9edba6639d2b3f77f8ad522622f54800000000000000000000000000000000000000000000000000000000000001b7000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e400000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e4000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
//     "nonce": "0x150",
//     "to": "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
//     "transactionIndex": "0x0",
//     "value": "0xc3663566a58000",
//     "type": "0x2",
//     "accessList": [],
//     "chainId": "0x1",
//     "v": "0x0",
//     "r": "0x2c61bff0d05beb633f8c3153496ebc8eac00bc1e66d159f93be3a65e7a9418dc",
//     "s": "0x6502c48b026add352efc12abdb2b9a99b9f4859a58633c9122682dfec9a97592",

// Блок списка транзакций, должен быть реализован как таблица с постраничной
// пагинацией. Сама транзакция должна содержать такую информацию:
// - ID транзакции (ссылка на https://etherscan.io/)
// - Адрес отправителя
// - Адрес получателя
// - Номер блока
// - Количество подтверждений (количество блоков которые вышли после блока в
// котором была транзакция)
// - Дата отправки транзакции (брать с блока)
// - Отправленная сумма
// - Комиссия (https://ethereum.org/ru/developers/docs/gas/)
// 3. Данные по сумме и номеру блока должны выводится как число

// 274354 * 74421420363

//     "gas": "0x42fb2",
//     "gasPrice": "0x1153dcc14b",
//     "maxFeePerGas": "0x15a8f44b6b",
//     "maxPriorityFeePerGas": "0x59682f00",

//     0.000000033768635979 + 1500000000  * 137344
