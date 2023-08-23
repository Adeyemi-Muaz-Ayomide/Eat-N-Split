import Button from "./Button";

const SplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💰 Bill Value</label>
      <input type="number" />
      <label>🧍‍♂️ Your Expense</label>
      <input type="number" />
      <label>🧑‍🤝‍🧑 Anthony's expense:</label>
      <input type="number" disabled />
      <label htmlFor="">🤑Who's paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="X">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default SplitBill;
