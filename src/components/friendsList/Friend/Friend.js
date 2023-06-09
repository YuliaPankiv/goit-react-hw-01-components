import PropTypes from 'prop-types';
import { FriendInfo, Status } from './Friend.styled';

export default function Friend({ name, avatar, isOnline }) {
  return (
    <FriendInfo isOnline={isOnline}>
      {isOnline}
      <Status isOnline={isOnline}>{isOnline}</Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendInfo>
  );
}

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
