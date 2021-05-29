import React, { useState } from "react";
import "./Volunteerfrom";
import {ButtonFill} from '../UI Elements/Buttons/Buttons'
import  ServerService from '../../ServerService'
const formDetails = {
  name: "",
  email: "",
  number: "",
  city: "",
  ngo_id: "",
  detail:""
};
const altData = {
    message: "random",
    type: false,
  };
const Volunteerform = () => {
  const [volunteerData, setVolunteerData] = useState(formDetails);
  const [redirect, setRedirect] = useState(null);
  const [success, setSuccess] = useState(false);
  const [alertdata, setAlertData] = useState(altData);
  const [errors, setErrors] = useState({
    pass: true,
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setVolunteerData({
      ...volunteerData,
      [name]: value,
    });
  };

  const volunteerFormHandler =(e) =>{
    e.preventDefault();

    if (errors.pass) {
      const data = {
        name: volunteerData.name,
        email: volunteerData.email,
        number: volunteerData.number,
        contact: volunteerData.number,
        city: volunteerData.city,
      };
      console.log(data);
      

      ServerService.ngoSignup(data)
        .then((result) => {
          const alertData = {
            message: "OTP send to your Email",
            type: true,
          };
          setAlertData(alertData);
          setSuccess(true);
         
        })
        .catch((err) => {
          const alertData = {
            message: err.response.data.Error || "Some Error Occured",
            type: false,
          };

          setAlertData(alertData);
          setSuccess(true);
        });

      setSuccess(false);
    }
  }
  
  return (<div>
      <div>
<form className="HospitalSignupForm" onSubmit={volunteerFormHandler}>
              <input
                value={volunteerData.name}
                type="text"
                onChange={handleFormChange}
                className="HospitalSignupForm-Input"
                placeholder="Organization Name"
                name="userName"
              />
              
              <input
                value={volunteerData.email}
                type="text"
                onChange={handleFormChange}
                className="HospitalSignupForm-Input"
                placeholder="Email"
                name="email"
              />
              

              <div className="HospitalSignupForm-Input-Small">
                <div>
                  <input
                    value={volunteerData.number}
                    type="text"
                    onChange={handleFormChange}
                    className="HospitalSignupForm-Input-Sfield"
                    placeholder="Contact"
                    name="number"
                  />
                  
                </div>
                <div>
                  <input
                    value={volunteerData.city}
                    type="text"
                    onChange={handleFormChange}
                    className="HospitalSignupForm-Input-Sfield"
                    placeholder="City"
                    name="city"
                  />
                 
                </div>
              </div>
              <input
                value={volunteerData.detail}
                type="password"
                onChange={handleFormChange}
                className="HospitalSignupForm-Input"
                placeholder="Passowrd"
                name="password"
              />
              
              <div className="HospitalSignup-Button">
                <ButtonFill type="submit"  width="100%">
                  Sign Up
                </ButtonFill>
              </div>
            </form>{" "}
            </div>
  </div>);
};

export default Volunteerform;
