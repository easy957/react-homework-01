import Container from 'components/Container/Container';
import User from 'components/User/User';
import Statistics from 'components/Statistics/Statistics';
import FriendsList from 'components/FriendsList/FriendsList';
import Transactions from 'components/Transactions/Transactions';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const { username, tag, location, avatar, stats } = user;

export default function App() {
  return (
    <>
      <Container>
        <User
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" data={data} />
      </Container>
      <Container>
        <FriendsList friends={friends} />
      </Container>
      <Container>
        <Transactions items={transactions} />
      </Container>
    </>
  );
}
