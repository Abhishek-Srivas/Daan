import React from "react";

import axios from "axios";

const Payment = () => {
  return (
    <div>
      <p>Buy React now!</p>
      <button
        className="App-link"
        onClick={() => {
          console.log("h");
        }}
      >
        Pay ₹500
      </button>
    </div>
  );
};

export default Payment;
