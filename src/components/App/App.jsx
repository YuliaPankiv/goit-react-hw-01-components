import Profile from "../profile/Profile";
import user from 'components/user';
import data from 'components/data';
import friends from 'components/friends';
import transactions from 'components/transactions' ;

import FriendList from "components/friendsList/FriendsList";
import TransactionHistory from "components/transactions/TransactionHistory";

import Statistics from "../statistics/Statistics";
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








