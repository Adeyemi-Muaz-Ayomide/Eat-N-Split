import { useState } from "react";
import Button from "./Button";

const AddFriendForm = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;
    const newFriends = { name, image };
    console.log(newFriends);
    onAddFriend(newFriends);

    setName('')
    setImage('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        type="text" //Url
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌄Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default AddFriendForm;
