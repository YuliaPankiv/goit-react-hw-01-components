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
