import PropTypes from 'prop-types';
import setBgRender from 'components/utils/setBgRender';
import { StatisticsData, Percentage, Label } from './StatData.styled';

export default function StatData({ label, percentage }) {
  return (
    <StatisticsData color={setBgRender()}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatisticsData>
  );
}

StatData.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
