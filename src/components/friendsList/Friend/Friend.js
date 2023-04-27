import { FriendInfo, Status } from './Friend.styled';

export default function Friend({ id, name, avatar, isOnline }) {
  return (
    <FriendInfo>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendInfo>
  );
}
