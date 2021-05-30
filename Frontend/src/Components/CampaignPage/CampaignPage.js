import React, { useEffect, useState } from "react";
import NavbarSolid from "../UI Elements/Navbar/NavbarSolid";
import "./CampaignPage.css";
import cardImg from "../../assets/cardImg2.png";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import Loader from "../UI Elements/Loader/Loader";
import Payment from "../PaymentGateway/payment";
import ServerService from "../../ServerService";

const CampaignPage = (props) => {
  const [details, setDetails] = useState("");

  useEffect(() => {
    ServerService.campaignDetails(id).then((res) => {
      console.log(res);
      setDetails(res.data.data);
    });
  }, []);
  const id = props.match.params.id;
  let percent = "";
  let ToGo = "";
  if (details) {
    percent = (details.amountRaised / details.goal) * 100;
    ToGo = details.goal - details.amountRaised;
  }

  return (
    <React.Fragment>
      <Loader />
      <NavbarSolid />
      <div className="CP-container">
        <div className="CP-card">
          <img src={cardImg} width="100%" alt="Campaign Image" />
          <p className="CP-h1">{details ? details.title : ""}</p>
          <p className="CP-h2">{details ? details.description : ""}</p>
          <p className="CP-h3">By - Daan NGO</p>
          <div className="CP-progressbar">
            <Progress
              status="default"
              percent={percent}
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
              <span className="cc-h4">
                &#8377; {details ? details.goal : ""}
              </span>
            </p>
            <p className="CP-rule">
              <span className="cc-h3">Raised</span>
              <br />
              <span className="cc-h4">
                &#8377; {details ? details.amountRaised : ""}
              </span>
            </p>
            <p>
              <span className="cc-h3">To Go</span>
              <br />
              <span className="cc-h4">&#8377; {ToGo}</span>
            </p>
          </div>
        </div>
        <div className="CP-form-container">
          <p className="form-h1">Donate</p>
          <Payment id={id} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CampaignPage;
