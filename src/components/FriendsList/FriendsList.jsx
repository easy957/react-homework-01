import Friend from '../Friend/Friend';
import s from './FriendsList.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => (
        <Friend
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
