import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import FriendList from "./components/FriendList";
import Button from "./components/Button";
import SplitBill from "./components/SplitBill";
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
  const [friends, setFriends] = useState(initialFriends);
  const [showForm, setShowForm] = useState(false);
  // const [showSplitBill, setShowSplitBill] = useState(false);

  const handleAddFriend = (friend) => {
    setFriends((prevFriend) => [...prevFriend, friend]);
  };

  const handleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          // showBill={showSplitBill}
          // onShowBill={handleShowSplitBill}
        />
        {showForm && <AddFriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowForm}>
          {showForm ? "close" : "Add Friend"}
        </Button>
      </div>
       <SplitBill friends={friends}/>
    </div>
  );
};

export default App;
