const Friend = ({ friend }) => {
  return (
    <li className="selected">
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
    </li>
  );
};

export default Friend;
