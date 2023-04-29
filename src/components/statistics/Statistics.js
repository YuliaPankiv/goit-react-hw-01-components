import PropTypes from 'prop-types';

import {
  Label,
  Percentage,
  Section,
  StatisticsData,
  StatisticsList,
  Title,
} from './statistics.styled';
import setBgRender from 'components/utils/setBgRender';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsData key={id} color={setBgRender()}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatisticsData>
        ))}
      </StatisticsList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
