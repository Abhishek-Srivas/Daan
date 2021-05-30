import "./DashboardCard.css";
import cardImg from "../../../assets/cardImg.png";
import { ButtonOutline } from "../Buttons/Buttons";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import DeleteIcon from "@material-ui/icons/Delete";

const DashboardCard = (props) => {
  const percent = (props.raised / props.goal) * 100;
  const ToGo = props.goal - props.raised;

  return (
    <div className="DashBoardCard-Container">
      <div className="DashBoardCard-image">
        <img src={cardImg} width="100%" alt="card-img" />
      </div>

      <div className="DashBoardCard-Content">
        <p className="dc-h1">{props.title}</p>
        <p className="dc-h2">{props.description}</p>
        <div className="dc-progressbar">
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
            <span className="cc-h4">&#8377; {props.raised} </span>
          </p>
          <p>
            <span className="cc-h3">To Go</span>
            <br />
            <span className="cc-h4">&#8377; {ToGo}</span>
          </p>
        </div>
      </div>
      <div>
        <DeleteIcon
          className="deleteIcon"
          onClick={props.deleteHandler}
          style={{ fontSize: 28 }}
        />
      </div>
    </div>
  );
};

export default DashboardCard;
