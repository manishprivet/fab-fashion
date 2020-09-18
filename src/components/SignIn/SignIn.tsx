import React, { useState } from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { signInWithGoogle } from '../../utils/firebase';
import { auth } from '../../utils/firebase';

const initialState = { email: '', password: '' };

const SignIn = () => {
  const [state, setState] = useState(initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState(initialState);
    } catch (err) {
      console.log(err);
    }
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
        <div className="buttons">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" googleSignIn onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
