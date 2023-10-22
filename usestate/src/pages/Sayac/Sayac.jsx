import CustomButton from "../../components/CustomButton/CustomButton";
import "./sayac.css";
import React, { useState } from "react";
const Sayac = () => {
  const [sayi, setSayi] = useState(0);

  return (
    <div>
      <h4>Sayaç Sayfası</h4>
      <div className="wrapper">
        <CustomButton
          buttonTitle="Arttır"
          buttonType="success"
          onClick={() => setSayi(sayi+1)}
        />
        <p style={{ color: sayi < 0 ? "red" : sayi > 0 ? "purple" : "green" }}>
          {sayi}
        </p>
        <CustomButton
          buttonTitle="Azalt"
          buttonType="danger"
          onClick={() => setSayi(sayi - 1)}
        />
      </div>
    </div>
  );
};

export default Sayac;
