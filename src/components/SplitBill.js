import { useState } from "react";
import Button from "./Button";

const SplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [myExpenses, setMyExpenses] = useState("");
  const friendBill = bill ? bill - myExpenses : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !myExpenses) return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -myExpenses);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♂️ Your Expense</label>
      <input
        type="text"
        value={myExpenses}
        onChange={(e) =>
          setMyExpenses(
            Number(e.target.value) > bill ? myExpenses : Number(e.target.value)
          )
        }
      />
      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense:</label>
      <input type="number" disabled value={friendBill} />
      <label>🤑Who's paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default SplitBill;
