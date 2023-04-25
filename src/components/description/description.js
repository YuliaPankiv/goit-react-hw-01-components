// import PropTypes from 'prop-types';
import css from './description.module.css';
export default function Description(prop) {
  return (
    <div className={css.description}>
      <img src={prop.avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{prop.username}</p>
      <p className={css.tag}>@{prop.tag}</p>
      <p className={css.location}>{prop.location}</p>
    </div>
  );
}
// Avatar.PropTypes = {
//   avatar: PropTypes.string,
//   username: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
// };
