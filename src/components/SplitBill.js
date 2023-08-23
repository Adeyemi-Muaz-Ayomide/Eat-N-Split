import { useState } from "react";
import Button from "./Button";

const SplitBill = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");
  const [myExpenses, setMyExpenses] = useState("");
  const friendBill = bill ? bill - myExpenses : "";
  const [whoIsPaying, setWhoIsPaying] = useState("");
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♂️ Your Expense</label>
      <input
        type="number"
        value={myExpenses}
        onChange={(e) =>
          setMyExpenses(
            Number(e.target.value) > bill ? myExpenses : Number(e.target.value)
          )
        }
      />
      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense:</label>
      <input type="number" disabled value={friendBill} />
      <label htmlFor="">🤑Who's paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(Number(e.target.value))}
      >
        <option value="user">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default SplitBill;
