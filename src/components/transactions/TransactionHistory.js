import Transactions from 'components/transactions/Transactions/Transactions';
import { Table } from './TransactionHistory.styled';
export default function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(items => (
          <Transactions
            key={items.id}
            type={items.type}
            amount={items.amount}
            currency={items.currency}
          ></Transactions>
        ))}
      </tbody>
    </Table>
  );
}
