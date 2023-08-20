import Button from "./Button";

const AddFriend = () => {
  return (
    <form className="form-add-friend">
      <label> 🧑‍🤝‍🧑Friend Name</label>
      <input type="text" />
      <label>🌄Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
    //   <button className='button'>Close</button>
  );
};

export default AddFriend;
