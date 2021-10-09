import React, { useState } from 'react';
import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.prevetDefault();
    setEmail('');
    setPassword('');
  };

  const emailHandleChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandleChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          label='Email'
          handleChange={emailHandleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          label='Password'
          handleChange={passwordHandleChange}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
