import Friend from "./Friend";
const FriendList = ({ friends, onSelectFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelect={onSelectFriend}
          // onHandleBill={onHandleBill}
        />
      ))}
      {/* <Button onClick={onShowForm}>Add Friend</Button> */}
    </ul>
  );
};

export default FriendList;
