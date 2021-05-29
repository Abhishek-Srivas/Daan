import React, { useState } from "react";
import HyperModal from "react-hyper-modal";
import Alert from "../UI Elements/Alerts/Alerts";
import ServerService from "../../ServerService";
import { ButtonFill } from "../UI Elements/Buttons/Buttons";
import { Redirect, Link } from "react-router-dom";
import "./Auth.css";

const signupValues = {
  userName: "",
  email: "",
  password: "",
  number: "",
  city: "",
};

const altData = {
  message: "random",
  type: false,
};

const SignupModal = (props) => {
  const [redirect, setRedirect] = useState(null);
  const [signup, setSignup] = useState(signupValues);
  const [errors, setErrors] = useState({
    pass: true,
  });
  const [showOtp, setShowOtp] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alertdata, setAlertData] = useState(altData);
  const [otp, setOtp] = useState({ otp: "" });
  const handleSignupChange = (e) => {
    const { name, value } = e.target;

    setSignup({
      ...signup,
      [name]: value,
    });
  };

  const handleOtpChange = (e) => {
    const { name, value } = e.target;

    setOtp({
      ...otp,
      [name]: value,
    });
  };

  const validateSignup = () => {
    const er = {};
    er.pass = true;
    if (!signup.email) {
      er.emailS = "Email Required";
      er.pass = false;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        signup.email
      )
    ) {
      er.emailS = "Email Address is Invalid";
      er.pass = false;
    }

    if (!signup.password.trim()) {
      er.passwordS = "Password required";
      er.pass = false;
    } else if (signup.password.length < 6) {
      er.passwordS = "Password needs to be 6 characters or more";
      er.pass = false;
    }

    if (!signup.userName.trim()) {
      er.userName = "Username Required";
      er.pass = false;
    } else if (signup.userName.length < 3) {
      er.userName = "Username needs to be 3 characters or more";
      er.pass = false;
    }

    setErrors(er);
  };

  const signUpHandler = (e) => {
    e.preventDefault();

    if (errors.pass) {
      const data = {
        ngoName: signup.userName,
        email: signup.email,
        password: signup.password,
        contact: signup.number,
        city: signup.city,
      };
      console.log(data);
      localStorage.setItem("email", signup.email);

      ServerService.ngoSignup(data)
        .then((result) => {
          const alertData = {
            message: "OTP send to your Email",
            type: true,
          };
          setAlertData(alertData);
          setSuccess(true);
          setShowOtp(true);
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
  };

  const otpHandler = (e) => {
    e.preventDefault();

    if (errors.pass) {
      const data = {
        ngoName: signup.userName,
        email: signup.email,
        password: signup.password,
        contact: signup.number,
        city: signup.city,
        otp: otp.otp,
      };
      console.log(data);

      ServerService.otpVerify(data)
        .then((result) => {
          const alertData = {
            message: "You have successfuly signed in",
            type: true,
          };
          setAlertData(alertData);
          setSuccess(true);
          setShowOtp(true);
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
  };
  if (redirect) {
    return <Redirect to={`/${redirect}`} />;
  }
  return (
    <HyperModal isOpen={props.show} requestClose={props.onHide}>
      <div className="HospitalSignupCard-Wrapper">
        <div className="HospitalSignupHeading-Wrapper">
          {showOtp ? (
            <>
              <h1>OTP SEND</h1>
              <p>Enter Your OTP here</p>
            </>
          ) : (
            <>
              <h1>Create New Account</h1>
              <p>Please Register your NGO/SHG to continue</p>
            </>
          )}
        </div>

        {showOtp ? (
          <>
            <form
              className="HospitalSignupForm"
              style={{ alignItems: "center" }}
              onSubmit={otpHandler}
            >
              <input
                value={otp.otp}
                type="text"
                onChange={handleOtpChange}
                className="HospitalSignupForm-Input"
                placeholder="OTP"
                name="otp"
              />
              <div className="Validation">
                {errors.userName && <p>{errors.userName}</p>}
              </div>

              <div className="HospitalSignup-Button">
                <ButtonFill type="submit" onClick={validateSignup} width="100%">
                  Send Otp
                </ButtonFill>
              </div>
            </form>
          </>
        ) : (
          <>
            <form className="HospitalSignupForm" onSubmit={signUpHandler}>
              <input
                value={signup.userName}
                type="text"
                onChange={handleSignupChange}
                className="HospitalSignupForm-Input"
                placeholder="Organization Name"
                name="userName"
              />
              <div className="Validation">
                {errors.userName && <p>{errors.userName}</p>}
              </div>
              <input
                value={signup.email}
                type="text"
                onChange={handleSignupChange}
                className="HospitalSignupForm-Input"
                placeholder="Email"
                name="email"
              />
              <div className="Validation">
                {errors.emailS && <p>{errors.emailS}</p>}
              </div>

              <div className="HospitalSignupForm-Input-Small">
                <div>
                  <input
                    value={signup.number}
                    type="text"
                    onChange={handleSignupChange}
                    className="HospitalSignupForm-Input-Sfield"
                    placeholder="Contact"
                    name="number"
                  />
                  <div className="Validation">
                    {errors.emailS && <p>{errors.emailS}</p>}
                  </div>
                </div>
                <div>
                  <input
                    value={signup.city}
                    type="text"
                    onChange={handleSignupChange}
                    className="HospitalSignupForm-Input-Sfield"
                    placeholder="City"
                    name="city"
                  />
                  <div className="Validation">
                    {errors.emailS && <p>{errors.emailS}</p>}
                  </div>
                </div>
              </div>
              <input
                value={signup.password}
                type="password"
                onChange={handleSignupChange}
                className="HospitalSignupForm-Input"
                placeholder="Passowrd"
                name="password"
              />
              <div className="Validation">
                {errors.passwordS && <p>{errors.passwordS}</p>}
              </div>
              <div className="HospitalSignup-Button">
                <ButtonFill type="submit" onClick={validateSignup} width="100%">
                  Sign Up
                </ButtonFill>
              </div>
            </form>{" "}
            <p className="bottom-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </>
        )}
      </div>

      {success ? <Alert alertdata={alertdata} /> : ""}
    </HyperModal>
  );
};

export default SignupModal;
