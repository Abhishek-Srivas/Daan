import React from "react";
import HyperModal from "react-hyper-modal";

const SignupModal = (props) => {
  return (
    <HyperModal isOpen={props.show} requestClose={props.onHide}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
        risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
        risus, sed porttitor quam.
      </p>
    </HyperModal>
  );
};

export default SignupModal;
