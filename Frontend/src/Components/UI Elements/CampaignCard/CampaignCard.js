import "./CampaignCard.css";
import cardImg from "../../../assets/cardImg.png";
import { ButtonOutline } from "../Buttons/Buttons";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { Link } from "react-router-dom";

const CampaignCard = (props) => {
  const percent = (props.raised / props.goal) * 100;
  const ToGo = props.goal - props.raised;

  var yourString = props.description; //replace with your string.
  var maxLength = 60; // maximum number of characters to extract

  //trim the string to the maximum length
  var trimmedString = yourString.substr(0, maxLength);

  //re-trim if we are in the middle of a word
  trimmedString = trimmedString.substr(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );
  return (
    <div className="cc">
      <img src={props.photo || cardImg} width="100%" alt="card-img" />
      <p className="cc-h1">{props.title}</p>
      <p className="cc-h2">{trimmedString}...</p>
      <div className="progressbar">
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
        <p className="cc-rule">
          <span className="cc-h3">Goal</span>
          <br />
          <span className="cc-h4">&#8377; {props.goal}</span>
        </p>
        <p className="cc-rule">
          <span className="cc-h3">Raised</span>
          <br />
          <span className="cc-h4">&#8377; {props.raised}</span>
        </p>
        <p>
          <span className="cc-h3">To Go</span>
          <br />
          <span className="cc-h4">&#8377; {ToGo}</span>
        </p>
      </div>
      <Link to={"/campaign/" + props.id}>
        <ButtonOutline change="true" width="100%">
          View Details
        </ButtonOutline>
      </Link>
    </div>
  );
};

export default CampaignCard;
