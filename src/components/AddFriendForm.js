import { useState } from "react";
import Button from "./Button";

const AddFriendForm = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriends = { name, image: `${image}?=${id}`, balance: 0, id };

    onAddFriend(newFriends);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form onSubmit={handleSubmit} className="form-add-friend">
      <label>🧑‍🤝‍🧑 Friend name</label>
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
