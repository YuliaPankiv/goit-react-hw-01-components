import PropTypes, { array } from 'prop-types';

import Transaction from 'components/transactions/Transactions';
import { Table } from './TableStyle.styled';
import Header from './Header';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Header />
      <tbody>
        {items.map(items => (
          <Transaction
            key={items.id}
            type={items.type}
            amount={items.amount}
            currency={items.currency}
          ></Transaction>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
