import data from 'components/dataJson/data';
import user from 'components/dataJson/user';
import friends from 'components/dataJson/friends';
import transactions from 'components/dataJson/transactions' ;

import Profile from "components/profile/Profile";
import FriendList from "components/friendsList/FriendsList";
import TransactionHistory from "components/transactions/TransactionHistory";
import Statistics from "components/statistics/Statistics";

import { Container } from "components/App/App.styled";

export default function App(){
  return (
  <Container>
    <Profile
      username={user.username}
      tag={user.tag}    
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
      </Container>
  );
} 








