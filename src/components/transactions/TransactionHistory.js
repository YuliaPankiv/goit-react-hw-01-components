import Transactions from 'components/transactions/Transactions';
import { Table } from './TableStyle.styled';
import Header from './Header';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Header />
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
