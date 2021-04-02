import styled from 'styled-components';
// import Theme from '../../../styles/theme';

export const InputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: fixed;
    width: 70%;
    bottom: 30px;
    display: flex;
    flex: 1;
    justify-content: center;
  }
`;

export const CustomChatInput = styled.input`
  flex: 0.8;
  border: 1px solid lightgrey;
  border-radius: 8px;
  padding: 8px 24px;
  outline: none;
`;