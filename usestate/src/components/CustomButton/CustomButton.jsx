import "./customButton.css";

const CustomButton = ({
  buttonTitle,
  buttonType,
  onClick,
  className,
  type,
}) => {
  //console.log(props.buttonTitle)
  // const {buttonTitle}=props
  // console.log(buttonType);
  //console.log(onClick);

  return (
    <button
      type={type}
      className={`btn ${className}`}
      style={{
        backgroundColor:
          buttonType === "success"
            ? "green"
            : buttonType === "info"
            ? "aquamarine"
            : "orangered",
      }}
      onClick={onClick}
    >
      {buttonTitle}
    </button>
  );
};

export default CustomButton;
