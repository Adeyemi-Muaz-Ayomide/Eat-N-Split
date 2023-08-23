import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import FriendList from "./components/FriendList";
import Button from "./components/Button";
import SplitBill from "./components/SplitBill";

const App = () => {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);

  const handleShowForm = () => {
    setShowAddFriendForm((show) => !show);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriendForm && <AddFriendForm />}
        <Button onClick={handleShowForm}>
          {showAddFriendForm ? "close" : "Add Friend"}
        </Button>
      </div>
      <SplitBill />
    </div>
  );
};

export default App;
