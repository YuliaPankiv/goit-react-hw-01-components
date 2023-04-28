import PropTypes from 'prop-types';
import { Tr } from './TableStyle.styled';

export default function Transaction({ amount, type, currency, n }) {
  return (
    <Tr n={n}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Tr>
  );
}
Transaction.propTypes = {
  n: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
