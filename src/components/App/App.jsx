import Profile from "../profile/Profile";
import user from 'components/user';
import data from 'components/data';
import Statistics from "../statistics/Statistics";
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
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
  </>
  );
} 








