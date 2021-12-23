import React from 'react';

const SignIn = ({ signIn, auth, email, pass }) => {
  const signInWithEmailPass = () => {
    signIn(auth, email, pass);
  };

  return (
    <div>
      sign in
      <button onClick={signInWithEmailPass}>sign in</button>
    </div>
  );
};

export default SignIn;
