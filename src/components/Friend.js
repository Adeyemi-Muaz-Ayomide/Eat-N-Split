import Button from "./Button";

const Friend = ({ friend, onSelect }) => {
  return (
    <li className="selected">
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p>You and {friend.name} are even</p>
      <Button onClick={onSelect}>select</Button>
    </li>
  );
};

export default Friend;
