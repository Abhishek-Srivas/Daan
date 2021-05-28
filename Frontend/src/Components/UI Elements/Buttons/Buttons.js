import "./Buttons.css";

export const ButtonFill = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="button-fill ripple"
      style={{
        width: props.width,
        fontSize: props.fontSize,
        padding: props.padding,
        borderWidth: props.borderWidth,
      }}
    >
      {props.children}
    </button>
  );
};

export const ButtonOutline = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="button-outline ripple-outline"
      style={{
        width: props.width,
        fontSize: props.fontSize,
        padding: props.padding,
        borderWidth: props.borderWidth,
      }}
    >
      {props.children}
    </button>
  );
};
