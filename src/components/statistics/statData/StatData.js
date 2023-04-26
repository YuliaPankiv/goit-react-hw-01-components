import PropTypes from 'prop-types';
import setBg from 'components/utils/setBg';
import { StatisticsData, Percentage, Label } from './StatData.styled';

export default function StatData({ label, percentage }) {
  return (
    <StatisticsData style={{ backgroundColor: setBg() }}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatisticsData>
  );
}

StatData.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
