import React from 'react';
import './FormInput.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const FormInput = ({ handleChange, label, ...props }: Props) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...props} />
    {label ? (
      <label className={`${props.value?.toString().length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
