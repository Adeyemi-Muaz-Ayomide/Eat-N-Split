import { useState } from "react";
import Button from "./Button";

const SplitBill = ({  }) => {
  const [billValue, setBillValue] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");

  const friendExpense = billValue - myExpense;
  return (
    <form className="form-split-bill">
      <h2>Split a bill with Anthony</h2>
      <label>💰Bill Value</label>
      <input
        type="number"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
      <label>🧍‍♂️Your Expense</label>
      <input
        type="number"
        value={myExpense}
        onChange={(e) => setMyExpense(Number(e.target.value))}
      />
      <label>🧑‍🤝‍🧑Anthony's expense:</label>
      <input
        type="number"
        value={friendExpense}
        onChange={(e) => setMyExpense(Number(e.target.value))}
      />
      <label htmlFor="">🤑Who's paying the bill?</label>
      <select
        value={selectedPerson}
        onChange={(e) => setSelectedPerson(e.target.value)}
      >
        <option value="You">You</option>
        <option value='Anthony'>Anthony</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default SplitBill;
