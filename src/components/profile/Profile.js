import PropTypes, { arrayOf } from 'prop-types';
import {
  Avatar,
  Description,
  ItemStats,
  Label,
  List,
  ProfileBox,
  Quantity,
  UserInfo,
  UserName,
} from './profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileBox>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>
      <List>
        <ItemStats>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ItemStats>
        <ItemStats>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ItemStats>
        <ItemStats>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ItemStats>
      </List>
    </ProfileBox>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
