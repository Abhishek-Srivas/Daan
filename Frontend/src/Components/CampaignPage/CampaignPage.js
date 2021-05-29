import React from "react";
import NavbarSolid from "../UI Elements/Navbar/NavbarSolid";
import "./CampaignPage.css";
import cardImg from "../../assets/cardImg2.png";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Loader from "../UI Elements/Loader/Loader";
import Payment from "../PaymentGateway/payment";

const CampaignPage = () => {
  return (
    <React.Fragment>
      <Loader />
      <NavbarSolid />
      <div className="CP-container">
        <div className="CP-card">
          <img src={cardImg} width="100%" alt="" />
          <p className="CP-h1">Gift an Education... Make Better Life.</p>
          <p className="CP-h2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor amet
            mi sem arcu pellentesque enim egestas luctus. Amet tortor, neque,
            nunc aliquet arcu. Tristique elementum nunc pharetra nunc, orci.
            Venenatis at sollicitudin consectetur at amet, tortor sagittis.
            Sagittis quam venenatis, vitae lorem lorem id morbi. Scelerisque
            aliquam ut vulputate venenatis fringilla. Sit viverra in blandit
            varius et cursus. Sit facilisi aliquet dui in odio est in elit.
            Tortor vitae interdum purus sagittis. Sit.
          </p>
          <p className="CP-h3">By - Daan NGO</p>
          <div className="CP-progressbar">
            <Progress
              status="default"
              percent={55}
              theme={{
                default: {
                  color: "#ff5224",
                },
              }}
            />
          </div>
          <div className="cc-progress">
            <p className="CP-rule">
              <span className="cc-h3">Goal</span>
              <br />
              <span className="cc-h4">&#8377; 5000</span>
            </p>
            <p className="CP-rule">
              <span className="cc-h3">Raised</span>
              <br />
              <span className="cc-h4">&#8377; 3000</span>
            </p>
            <p>
              <span className="cc-h3">To Go</span>
              <br />
              <span className="cc-h4">&#8377; 2000</span>
            </p>
          </div>
        </div>
        <div className="CP-form-container">
          <p className="form-h1">Donate</p>
          <Payment />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CampaignPage;
