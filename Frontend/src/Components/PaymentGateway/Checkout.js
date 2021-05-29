// import React, { useState, useEffect } from "react";
// import CryptoJS, { HmacSHA256 } from "crypto-js";
// import axios from "axios";

// import Alert from "../UI Elements/Alerts/Alerts";
// import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
// import { ButtonFill } from "../UI Elements/Buttons/Buttons";

// const defaultInputForm = {
//   amount: "",
// };

// const altData = {
//   message: "random",
//   type: false,
// };

//   const [inputForm, setInputForm] = useState(defaultInputForm);
//   const [alertdata, setAlertData] = useState(altData);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     e.persist();
//     setInputForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleVerifyResponse = async (response, razorpay_order_id) => {
//     console.log("entered");
//     const { razorpay_payment_id, razorpay_signature } = response;
//     console.log(response, razorpay_order_id);

//     const secret = process.env.REACT_APP_RAZORPAY_KEY_SECRET;
//     console.log("enteredto");

//     const generated_signature = HmacSHA256(
//       `${razorpay_order_id}|${razorpay_payment_id}`,
//       secret
//     ).toString(CryptoJS.enc.Hex);
//     console.log("enteredhere");
//     if (generated_signature === razorpay_signature) {
//       await axios.post(
//         "https://daan-app.herokuapp.com/api/payments",
//         response,
//         {
//           timeout: 20000,
//         }
//       );
//       setMessage("Successful");
//     } else {
//       setMessage("Unsuccessful");
//     }

//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);
//     try {
//       const body = { amount: parseInt(inputForm.amount * 100, 10) };
//       const reqOptions = { timeout: 30000 };
//       const response = await trackPromise(
//         axios.post(
//           "https://daan-app.herokuapp.com/api/razorpay",
//           body,
//           reqOptions
//         )
//       );

//       const key = process.env.REACT_APP_RAZORPAY_KEY_ID;
//       const options = {
//         key, // Enter the Key ID generated from the Dashboard
//         amount: response.data.amount, // Amount is in currency subunits. Default currency is INR.
//         currency: response.data.currency,
//         name: "Acme Corp",
//         description: "Test Transaction",
//         image: null, // URL
//         order_id: response.data.id, // This is the `id` obtained in the response.
//         handler: (res) => {
//           console.log(res);
//           handleVerifyResponse(res, response.data.id);
//         },
//         prefill: {
//           name: "Gaurav Kumar",
//           email: "gaurav.kumar@example.com",
//           contact: "9999999999",
//         },
//       };
//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (err) {
//       setMessage("error");
//     } finally {
//       setLoading(false);
//       setInputForm({ amount: "" });
//     }
//   };

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   return (

//   );
// };

// export default Checkout;
