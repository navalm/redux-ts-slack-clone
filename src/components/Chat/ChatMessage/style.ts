import styled from 'styled-components';
import Theme from '../../../styles/theme';

export const Message = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 12px 0;
  > img {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    margin-right: 24px;
  }
`;

export const MessageInfo = styled.div`
  > h4 > span {
    font-size: 11px;
    color: ${Theme.layout.light2Gray};   
  }
`;