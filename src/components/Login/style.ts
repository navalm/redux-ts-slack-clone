import styled from 'styled-components';
import Theme from '../../styles/theme';

export const LoginSect = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${Theme.layout.slackPurpleDark};
  color: ${Theme.layout.light0Gray};
`;

export const LoginInnerSect = styled.div`
  width: 50%;
  height: 440px;
  margin-top: 128px;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(31,32,36,0.12), 0 1px 2px rgba(31,32,36,0.24);
  background-color: ${Theme.layout.dark1Gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    margin-top: 1rem;
  }
  > p {
    font-size: 15px;
    margin-top: 1rem;
  }
  > button {
    text-transform: none;
    font-weight: 700;
    padding: 8px 20px;
    margin-top: 2rem;
    background-color: ${Theme.layout.light0Gray};
    color: ${Theme.layout.dark2Gray};
    transition: all 0.2s linear;
    &:hover {
      color: ${Theme.layout.light0Gray};
      transform: scale(1.05);
      border: 1px solid ${Theme.layout.light0Gray};
    }
  }
`;

export const SlackLogo = styled.img`
  width: 48px;
`;