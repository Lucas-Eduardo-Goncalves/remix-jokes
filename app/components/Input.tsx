import React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  name: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
  error?: string;
}

export function Input({
  labelName,
  type,
  name,
  id,
  error,
  ...rest
}: IInputProps) {
  return (
    <div>
      <label htmlFor={id}>{labelName}</label>
      <input type={type} id={id} name={name} {...rest} />

      {error && (
        <p className="form-validation-error" role="alert" id="username-error">
          {error}
        </p>
      )}
    </div>
  );
}
