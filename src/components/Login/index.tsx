import React from 'react';
import Button from '@material-ui/core/Button';
import { LoginSect, LoginInnerSect, SlackLogo } from './style';
import { auth, provider } from '../../firebase';

const Login = (props: any) => {
  const signIn = (e: any) => {
    e.preventDefault();
    auth.signInWithPopup(provider)
      .catch(error => alert(error.message));
  }
  return (
    <LoginSect>
      <LoginInnerSect>
        <SlackLogo src="/slack-new-logo.svg" alt="slack logo" />
        <h1>Slack Clone</h1>
        <h1>Sign in to continue</h1>
        <p>slackclone.navalm.com</p>
        <Button 
          type="submit"
          onClick={(e) => signIn(e)}
          startIcon={<img src="/google-g.svg" alt="google g" height="24px" />}
        >
          Login with Google
        </Button>
      </LoginInnerSect>
    </LoginSect>
  );
}

export default Login;