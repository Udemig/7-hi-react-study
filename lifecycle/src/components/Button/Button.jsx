import { useEffect } from "react";
import './Button.css'


const Button = ({ onClick, buttonTitle, buttonType }) => {
  //Ekrana Basıldığı an
  useEffect(() => {
    console.log("button Ekrana bsıldı");
  }, []);

  //Ekrandan silinme anı
  useEffect(() => {
    return () => {
      console.log("Buhton ekrandan silindi");
    };
  }, []);

 
  const buttonStyle = {
    backgroundColor: buttonType?.backgroundColor,

    padding:buttonType?.padding,
    borderRadius: "10px",
  };
  return (
    <button style={buttonStyle} onClick={onClick}>
      {buttonTitle}
    </button>
  );
};

export default Button;
