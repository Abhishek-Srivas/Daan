import React, { useState, useEffect } from "react";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

import Alert from "../UI Elements/Alerts/Alerts";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
import { ButtonFill } from "../UI Elements/Buttons/Buttons";
import { BASE_URL } from "../../ServerService";
const defaultInputForm = {
  amount: "",
  name: "",
  email: "",
};

const altData = {
  message: "random",
  type: false,
};

function Payment(props) {
  const [inputForm, setInputForm] = useState(defaultInputForm);
  const [alertdata, setAlertData] = useState(altData);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setInputForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay(e) {
    e.preventDefault();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = {
      amount: inputForm.amount,
    };
    console.log(data);
    const result = await axios.post(BASE_URL + "/payment/orders", data);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",

      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          ...inputForm,
          id: props.id,
        };

        const result = await axios.post(BASE_URL + "/payment/success", data);
        const alertData = {
          message: result.data.msg,
          type: true,
        };

        setAlertData(alertData);
        setSuccess(true);
        // alert(result.data.msg);
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <React.Fragment>
      <form onSubmit={displayRazorpay}>
        <p className="form-h2">Choose ammount you want to donate.</p>
        <RadioGroup
          onChange={(value) => {
            setInputForm((prev) => ({ ...prev, amount: value }));
          }}
          horizontal
          className="radiogrp"
        >
          <ReversedRadioButton
            pointColor="#FF5224"
            rootColor="#8C8C8C"
            value="100"
            style={{ borderRadius: "16px!important" }}
          >
            &#8377; 100
          </ReversedRadioButton>
          <ReversedRadioButton
            pointColor="#FF5224"
            rootColor="#8C8C8C"
            value="200"
          >
            &#8377; 200
          </ReversedRadioButton>
          <ReversedRadioButton
            pointColor="#FF5224"
            rootColor="#8C8C8C"
            value="500"
          >
            &#8377; 500
          </ReversedRadioButton>
        </RadioGroup>

        <p className="form-h2">Or Enter Custom amount to donate.</p>
        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          onChange={handleChange}
          value={inputForm.amount}
        />
        <p className="form-h2">Donor's Information</p>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
          onChange={handleChange}
        />
        <ButtonFill width="100%" type="submit">
          Donate Money
        </ButtonFill>
      </form>
      {success ? <Alert alertdata={alertdata} /> : ""}
    </React.Fragment>
  );
}

export default Payment;
