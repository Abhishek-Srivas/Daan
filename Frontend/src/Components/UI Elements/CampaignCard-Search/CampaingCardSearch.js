import "./CampaignCardSearch.css";
import cardImg from "../../../assets/cardImg.png";
import { ButtonOutline,ButtonFill } from "../Buttons/Buttons";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const data = {
  heading: "Gift an Education... Make Better Life.",
  detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris auctor pretium, amet proin nis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris auctor pretium, amet proin nis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris auctor pretium, amet proin nis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris auctor pretium, amet proin nis",
  percent:56,
  amount:5000,
  raised:3000,
  pending:2000
};

const CampaignCard = () => {
  return (
    
    <div className="DashBoardCardSearch-Container">
      <div className="DashBoardCardSearch-image"> 
        <img src={cardImg} width="100%" alt="card-img" />
        <div className="dcs-progressbar">
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
      </div>
      
      <div className="DashBoardCard-Content">
        <p className="dc-h1">{data.heading}</p>
        <p className="dc-h2">
          {data.detail}
        </p>
        
        <div className="dcs-progress">
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
        <div className="dcs-button-wrapper">
      <ButtonOutline width="30%" >
          Detail
        </ButtonOutline>
        
        <ButtonFill width="30%" >
            Donate
        </ButtonFill>
      </div>
      </div>
      
    </div>
 
  );
};

export default CampaignCard;
