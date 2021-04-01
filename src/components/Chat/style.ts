import styled from 'styled-components';
import Theme from '../../styles/theme';

export const ChatSect = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  padding: 75px 0;
  background-color: ${Theme.layout.light1Gray};
  color: ${Theme.layout.dark2Gray};
`;

export const ChatHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px;
  border-bottom: 1px solid lightgrey;
`;

export const ChatHeaderLeft = styled.div`
  flex: 0.7;
  > h4 {
    font-size: 17px;
  }
`;

export const ChatHeaderRight = styled.div`
  flex: 0.3;
  > p {
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

  }
`;

export const ChatContent = styled.div`
  padding: 12px 24px;
  > h1 {
    font-size: 13px;
  }
`;