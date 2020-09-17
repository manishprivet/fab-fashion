import React, { useState } from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

const SignIn = () => {
  const [state, setState] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ email: '', password: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="Email"
          handleChange={handleChange}
          type="email"
          value={state.email}
          required
        />
        <FormInput
          name="password"
          handleChange={handleChange}
          type="password"
          value={state.password}
          required
          label="Password"
        />
        <Button type="submit">SIGN IN</Button>
      </form>
    </div>
  );
};

export default SignIn;
