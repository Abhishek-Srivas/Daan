import "./DashboardCard.css";
import cardImg from "../../../assets/cardImg.png";
import { ButtonOutline } from "../Buttons/Buttons";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const data = {
  heading: "Gift an Education... Make Better Life.",
  detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris auctor pretium, amet proin nis",
  percent:56,
  amount:5000,
  raised:3000,
  pending:2000
};

const CampaignCard = () => {
  return (
      <div className="test">
    <div className="DashBoardCard-Container">
      <div className="DashBoardCard-image"> 
        <img src={cardImg} width="100%" alt="card-img" />
      </div>
      
      <div className="DashBoardCard-Content">
        <p className="dc-h1">{data.heading}</p>
        <p className="dc-h2">
          {data.detail}
        </p>
        <div className="dc-progressbar">
          <Progress
            status="default"
            percent={data.percent}
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
            <span className="cc-h4">&#8377; {data.amount}</span>
          </p>
          <p className="cc-rule">
            <span className="cc-h3">Raised</span>
            <br />
            <span className="cc-h4">&#8377; {data.raised} </span>
          </p>
          <p>
            <span className="cc-h3">To Go</span>
            <br />
            <span className="cc-h4">&#8377; {data.pending}</span>
          </p>
        </div>
       
      </div>
      <div>
      <ButtonOutline change="true" width="100%">
          Edit
        </ButtonOutline>
      </div>
    </div>
    </div>
  );
};

export default CampaignCard;
