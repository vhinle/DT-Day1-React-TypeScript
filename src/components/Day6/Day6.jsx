import React, { useState } from "react";

function UserForm() {
  //  Add state variables for each field here
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    occupation: "",
    notes: "",
  });

  const { firstName, lastName, age, gender, occupation, notes } = formData;

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "number" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    //  prevent default submission, Log or alert the form data
    e.preventDefault();

    console.log(JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange} /* add name, bind value and onChange */
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange} /* add name, bind value and onChange */
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleChange} /* add name, bind value and onChange */
        />
      </div>
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={gender === "Male"}
            onChange={handleChange}
            /* add name, bind checked and onChange */
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={gender === "Female"}
            onChange={handleChange} /* add name, bind checked and onChange */
          />
          Female
        </label>
      </div>
      <div>
        <label>Occupation:</label>
        <input
          type="text"
          name="occupation"
          value={occupation}
          onChange={handleChange} /* add name, bind value and onChange */
        />
      </div>
      <div>
        <label>Notes:</label>
        <textarea
          name="notes"
          value={notes}
          onChange={handleChange} /* bind value and onChange */
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
