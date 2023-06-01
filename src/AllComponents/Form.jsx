import React from "react";
const Form = (name, lab) => {
  return (
    <div>
      <form name="form">
        <label lab="label">
          Name
          <input type={Text} name="Name"></input>
        </label>
        <br></br>
        <label lab="label">
          Address
          <select>
            <option>Nepal</option>
            <option>India</option>
          </select>
        </label>
        <br></br>
        <label>
          More Info:
          <textarea></textarea>
        </label>

        <label>
          <button>Submit</button>

          <input type={"checkbox"}></input>
        </label>
      </form>
    </div>
  );
};

export default Form;
