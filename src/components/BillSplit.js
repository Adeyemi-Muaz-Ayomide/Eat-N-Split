// import Button from "./Button";

const BillSplit = () => {
  return (
    <div className="form-split-bill">
      <form>
        <h2>SPLIT A BILL WITH SARAH</h2>
        <label>💰Bill value</label>
        <input type="text" />
        <label>🧍‍♂️Your expense</label>
        <input type="text" />
        <label>🧑‍🤝‍🧑Sarah's expense</label>
        <input type="text" />
        <label>🤑Who is paying the bill?</label>
        <select>
          <option value="">You</option>
          <option value="">Sarah</option>
        </select>
        {/* <Button>Split bill</Button> */}
      </form>
    </div>
  );
};

export default BillSplit;
