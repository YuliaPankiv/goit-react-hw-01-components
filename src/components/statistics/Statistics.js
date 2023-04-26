import PropTypes from 'prop-types';
import PageTitle from 'components/statistics/PageTitle/PageTitle';
import StatData from 'components/statistics/statData/StatData';
import { Container, StatisticsList } from './statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <PageTitle title={title} />}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatData key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
    </Container>
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
