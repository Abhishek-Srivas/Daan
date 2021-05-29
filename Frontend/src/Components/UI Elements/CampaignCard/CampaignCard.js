import "./CampaignCard.css";
import cardImg from "../../../assets/cardImg.png";
import { ButtonOutline } from "../Buttons/Buttons";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const CampaignCard = () => {
  return (
    <div className="cc">
      <img src={cardImg} width="100%" alt="card-img" />
      <p className="cc-h1">Gift an Education... Make Better Life.</p>
      <p className="cc-h2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
        auctor pretium, amet proin nis
      </p>
      <div className="progressbar">
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
        <p className="cc-rule">
          <span className="cc-h3">Goal</span>
          <br />
          <span className="cc-h4">&#8377; 5000</span>
        </p>
        <p className="cc-rule">
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
      <ButtonOutline change="true" width="100%">
        Donate
      </ButtonOutline>
    </div>
  );
};

export default CampaignCard;
