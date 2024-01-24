import React, { CSSProperties, FC, InputHTMLAttributes } from "react";

type InputProps = {
  name?: string;
  className?: string;
  placeholder?: string;
  containerStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  label?: string;
  id?: string;
  inputProps?: InputProps;
  labelClassName?: string;
  labelStyle?: CSSProperties;
  htmlFor?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({
  name = "",
  className,
  type = "text",
  placeholder,
  containerStyle = {},
  label = "Input",
  id = "",
  inputStyle = {},
  inputProps = {},
  value = "",
  onChange,
  labelClassName,
  labelStyle = {},
}) => {
  return (
    <input
      type={type}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder || label}
      id={id}
      style={{ ...inputStyle }}
      {...inputProps}
    />
  );
};

export const Label: FC<InputProps> = ({
  htmlFor = "",
  className,
  label = "Input",
}) => {
  return (
    <label htmlFor={Input.name} className={className}>
      {label}
    </label>
  );
};
