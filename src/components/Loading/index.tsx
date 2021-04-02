import React from 'react';
import { LoginSect, LoginInnerSect, SlackLogo } from '../Login/style';
import { StyledSpinner } from './style';
import Spinner from 'react-spinkit';

const Loading = (props: any) => {
  return (
    <LoginSect>
      <LoginInnerSect>
        <SlackLogo src="/slack-new-logo.svg" alt="slack logo" />
        <StyledSpinner>
          <Spinner name="folding-cube" color="white" />
        </StyledSpinner>
      </LoginInnerSect>
    </LoginSect>
  );
}

export default Loading;