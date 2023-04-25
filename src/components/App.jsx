import Profile from "./profile/Profile";
import user from 'components/user';

export default function App(){
  return (
  <>
    <Profile
      username={user.username}
      tag={user.tag}    
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </>
  );
} 








