import PropTypes from 'prop-types';

import Friend from './Friend/Friend';
import { ListFriend } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <ListFriend>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <Friend key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </ListFriend>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
