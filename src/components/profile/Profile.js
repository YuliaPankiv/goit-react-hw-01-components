// import PropTypes from 'prop-types';
import Description from '../description/description';
import Stats from '../stats/Stats';
import css from './profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <Description
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <Stats stats={stats} />
    </div>
  );
}
// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string,
//   stats: PropTypes.shape({
//     followers: PropTypes.number,
//     views: PropTypes.number,
//     likes: PropTypes.number,
//   }),
// };
