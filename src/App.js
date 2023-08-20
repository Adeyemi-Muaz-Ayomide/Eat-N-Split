import { useState } from "react";
import AddFriend from "./components/AddFriend";
// import BillSplit from "./components/BillSplit";
import FriendList from "./components/FriendList";
// import Button from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm((prev) => !prev)
  }

  const addFriendToList = (friendInput) => {
    setFriendsList((prevFriend) => [...prevFriend, friendInput]);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friendsList} onShowForm = { handleShowForm } /> 
        {/* <Button>Add Friend</Button> */}
        {showForm && <AddFriend onAddFriend={addFriendToList} />}
        {/* <BillSplit /> */}
      </div>
    </div>
  );
};

// onShowForm = { handleShowForm }
export default App;
