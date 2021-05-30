import "./CampaignCardSearch.css";
import cardImg from "../../../assets/cardImg.png";
import { ButtonOutline, ButtonFill } from "../Buttons/Buttons";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { Link } from "react-router-dom";

// const props = {
//   heading: "Gift an Education... Make Better Life.",
//   detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris auctor pretium, amet proin nis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris auctor pretium, amet proin nis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris auctor pretium, amet proin nis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris auctor pretium, amet proin nis",
//   percent:56,
//   amount:5000,
//   raised:3000,
//   pending:2000
// };

const CampaignCard = (props) => {
  const percentBar = (props.raised / props.goal) * 100;
  const toGo = props.goal - props.raised;
  return (
    <div className="DashBoardCardSearch-Container">
      <div className="DashBoardCardSearch-image">
        <img src={props.photo || cardImg} width="100%" alt="card-img" />
        <div className="dcs-progressbar">
          <Progress
            status="default"
            percent={percentBar}
            theme={{
              default: {
                color: "#ff5224",
              },
            }}
          />
        </div>
      </div>

      <div className="DashBoardCard-Content">
        <p className="dc-h1">{props.title}</p>
        <p className="dc-h2">{props.description}</p>

        <div className="dcs-progress">
          <p className="cc-rule">
            <span className="cc-h3">Goal</span>
            <br />
            <span className="cc-h4">&#8377; {props.goal}</span>
          </p>
          <p className="cc-rule">
            <span className="cc-h3">Raised</span>
            <br />
            <span className="cc-h4">&#8377; {props.raised} </span>
          </p>
          <p>
            <span className="cc-h3">To Go</span>
            <br />
            <span className="cc-h4">&#8377; {toGo}</span>
          </p>
        </div>
        <div className="dcs-button-wrapper">
          <Link to={"/campaign/" + props.id}>
            <ButtonOutline width="110%">Detail</ButtonOutline>
          </Link>
          <Link to={"/campaign/" + props.id}>
            <ButtonFill width="100%">Donate</ButtonFill>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
