import Button from "./Button";

const AddFriend = () => {
  return (
    <div className="form-add-friend">
      <form>
        <label> 🧑‍🤝‍🧑Friend Name</label>
        <input type="text" />
        <label>🌄Image URL</label>
        <input type="text" />
        <Button className='button'>Add</Button>
      </form>
      <button className='button'>Close</button>
    </div>
  );
};

export default AddFriend;
