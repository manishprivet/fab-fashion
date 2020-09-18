import React, { useState } from 'react';
import './SignUp.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { auth, createUserProfileDocument } from '../../utils/firebase';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [state, setState] = useState(initialState);

  const { displayName, email, password, confirmPassword } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert(`Passwords Don't Match`);

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      setState(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Full Name"
          name="displayName"
          handleChange={handleChange}
          value={displayName}
          required
        />
        <FormInput
          type="email"
          label="Email"
          name="email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          handleChange={handleChange}
          value={password}
          required
        />
        <FormInput
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          handleChange={handleChange}
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
