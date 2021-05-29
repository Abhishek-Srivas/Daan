import React, { useState } from "react";
import { ButtonFill } from "../../UI Elements/Buttons/Buttons";
import './NewCampaing.css'
const formValues = {
  image: "",
  heading: "",
  discription: "",
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
          value={formValues.heading}
          type="text"
          onChange={formHandler}
          className="HospitalSignupForm-Input"
          placeholder="Heading"
          name="heading"
        />
        {/* <div className="Validation">
          {errors.emailS && <p>{errors.emailS}</p>}
        </div> */}
        <input
          value={formValues.discription}
          type="password"
          onChange={formHandler}
          className="HospitalSignupForm-Input NewCampaingForm-detail"
          placeholder="discription"
          name="discription"
        />
        {/* <div className="Validation">
          {errors.passwordS && <p>{errors.passwordS}</p>}
        </div> */}
        <input
          value={formValues.discription}
          type="password"
          onChange={formHandler}
          className="HospitalSignupForm-Input"
          placeholder="Passowrd"
          name="password"
        />
        {/* <div className="Validation">
          {errors.passwordS && <p>{errors.passwordS}</p>}
        </div> */}
        <select onChange={formHandler} name="Tag" className="NewCampaingForm-Tag">
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
          value={formValues.amount}
          type="text"
          onChange={formHandler}
          className="HospitalSignupForm-Input"
          placeholder="Amount"
          name="amount"
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
