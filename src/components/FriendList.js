
import Button from "./Button";
import Friend from "./Friend";
const FriendList = ({ friends, onShowForm }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
      <Button onClick={onShowForm}>Add Friend</Button>
    </ul>
  );
};

export default FriendList;
