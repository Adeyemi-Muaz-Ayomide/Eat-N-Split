import { useState } from "react";
import Button from "./Button";

const BillSplit = ({ selectedFriend, onSplitBill }) => {
  const [billValue, setBillValue] = useState('')
  const [expenses, setExpenses] = useState('')
  // const [friendExpenses, setFriendExpenses] = useState('')
  const [selected, setSelected] = useState('')
  const wasPaidFor = billValue - expenses

  const handleSplitBill = (e) => {
    e.preventDefault()

    const splittedBill = { selected , wasPaidFor , expenses }

    onSplitBill(splittedBill)

  }

  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH SARAH</h2>
      <label>💰Bill value</label>
      <input type="number" value={billValue} onChange={(e) => setBillValue(Number(e.target.value))} />
      <label>🧍‍♂️Your expense</label>
      <input type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} />
      <label>🧑‍🤝‍🧑{selectedFriend[1].name} expense</label>
      <input type="number" value={wasPaidFor} onChange={(e) => setBillValue(Number(e.target.value))} />
      <label>🤑Who is paying the bill?</label>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="You">You</option>
        <option value="user">{selectedFriend[1].name}</option>
      </select>
      <Button onClick={handleSplitBill}>Split bill</Button>
    </form>
  );
};

export default BillSplit;
