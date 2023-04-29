import PropTypes, { array } from 'prop-types';

import { Table, Tr } from './TableStyle.styled';

export default function TransactionHistory({ items }) {
  let n = 1;
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
        {items.map(({ type, amount, currency, n, id }) => {
          items.n = n++;
          return (
            <Tr key={id} n={n}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </Tr>
          );
        })}
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
