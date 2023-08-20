import { useState } from "react";
import Button from "./Button";

const AddFriend = ({ onAddFriend }) => {
  const [friendName, setFriendName] = useState("");
  const [friendImg, setFriendImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const friendInput = { friendName, friendImg };
    console.log(friendInput);
    onAddFriend(friendInput);

    setFriendName("");
    setFriendImg("");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label> 🧑‍🤝‍🧑Friend Name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label>🌄Image URL</label>
      <input
        type="text" //url
        value={friendImg}
        onChange={(e) => setFriendImg(e.target.value)}
      />
      <Button>Add</Button>

      {/* <p>{friendName}</p>
      <p>{friendImg}</p> */}
    </form>
    //   <button className='button'>Close</button>
  );
};

export default AddFriend;
