import React, { useState } from "react";
import { ButtonFill } from "../../UI Elements/Buttons/Buttons";
import "./NewCampaing.css";
const formValues = {
  image: "",
  heading: "",
  description: "",
  tag: "",
  amount: "",
};

const NewCampaing = () => {
  const [campaingValues, setCampaingForm] = useState(formValues);

  const formHandler = (e) => {
    const { name, value } = e.target;

    setCampaingForm({
      ...campaingValues,
      [name]: value,
    });
  };

  return (
    <div className="NewCampaing-Container">
      <form className="NewCampaingForm" onSubmit={formHandler}>
        <input
          type="text"
          onChange={formHandler}
          className="HospitalSignupForm-Input"
          placeholder="Title"
          name="heading"
        />

        <textarea
          onChange={formHandler}
          // className="HospitalSignupForm-Input "
          placeholder="Description"
          name="description"
          maxLength="200"
          rows="5"
        />

        <select
          onChange={formHandler}
          name="Tag"
          className="NewCampaingForm-Tag"
        >
          <option value="" disabled selected>
            Choose your tag
          </option>
          <option value="Money">Money</option>
          <option value="Education">Education</option>
          <option value="Clothes">Clothes</option>
          <option value="Blood">Blood</option>
          <option value="Beds not available">Food/Water</option>
        </select>
        <input
          type="number"
          onChange={formHandler}
          className="HospitalSignupForm-Input"
          placeholder="Amount to be raised"
          name="amount"
        />
        <p className="uploadImg">Upload an Image for your Campaign</p>
        <input
          type="file"
          name="my-image"
          id="image"
          accept="image/jpeg, image/png, image/svg"
        />
        <div className="HospitalSignup-Button">
          <ButtonFill type="submit" width="100%">
            Submit
          </ButtonFill>
        </div>
      </form>
    </div>
  );
};

export default NewCampaing;
