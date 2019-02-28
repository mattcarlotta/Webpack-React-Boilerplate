import React from "react";
import PropTypes from "prop-types";
import FieldError from "../FieldError";
import {
  hasFieldError,
  inputContainer,
  inputStyle,
  labelStyle
} from "./styles.scss";

const Input = ({
  hasError,
  isRequired,
  name,
  label,
  onHandleChange,
  value,
  style
}) => (
  <div style={style} className={inputContainer}>
    <label className={labelStyle} htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      className={`${inputStyle} ${hasError && isRequired ? hasFieldError : ""}`}
      name={name}
      value={value}
      onChange={onHandleChange}
    />
    <FieldError hasError={hasError} isRequired={isRequired} />
  </div>
);

Input.propTypes = {
  hasError: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};

export default Input;
