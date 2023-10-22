import React, { useState } from "react";
const FormInput = ({ label, onChange, type, showPassword, isIcon, isShow,value }) => {
  // console.log(label)

  return (
    <div className="inputBar">
      <label htmlFor="">{label}</label>
      <br />
      <input
      value={value}
      onChange={onChange} type={type} className="form-control" />
      <br />
      {isIcon === true && (
        <button
        type="button"
        className="show" onClick={showPassword}>
          {isShow === true ? (
            <i className="fa-solid fa-eye-slash"></i>
          ) : (
            <i className="fa-solid fa-eye"></i>
          )}
        </button>
      )}
    </div>
  );
};

export default FormInput;
