import "./Buttons.css";

export const ButtonFill = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="button-fill ripple"
      style={
        props.change
          ? {
              width: props.width,
              fontSize: props.fontSize,
              padding: props.padding,
              borderWidth: props.borderWidth,
            }
          : { width: "auto" }
      }
    >
      {props.children}
    </button>
  );
};

export const ButtonOutline = (props) => {
  return (
    <button
      type={props.type}
      className="button-outline ripple-outline"
      style={
        props.change
          ? {
              width: props.width,
              fontSize: props.fontSize,
              padding: props.padding,
              borderWidth: props.borderWidth,
            }
          : { width: "auto" }
      }
    >
      {props.children}
    </button>
  );
};
