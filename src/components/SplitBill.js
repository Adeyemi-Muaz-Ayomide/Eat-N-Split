import Button from "./Button";

const SplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input type="number" />
      <label>🧍‍♂️ Your Expense</label>
      <input type="number" />
      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expense:</label>
      <input type="number" disabled />
      <label htmlFor="">🤑Who's paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default SplitBill;
