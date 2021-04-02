import styled from 'styled-components';
import Theme from '../../styles/theme';

export const ChatSect = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  padding-top: 64px;
  background-color: ${Theme.layout.light1Gray};
  color: ${Theme.layout.dark2Gray};
  overflow-y: hidden;
`;

export const ChatHeader = styled.div`
  min-height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 24px;
  border-bottom: 1px solid lightgrey;
`;

export const ChatHeaderLeft = styled.div`
  flex: 0.7;
  > h4 {
    font-size: 17px;
    display: flex;
    align-items: center;
    > .MuiSvgIcon-root {
      margin-left: 0.5rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const ChatHeaderRight = styled.div`
  flex: 0.3;
  > p {
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    > .MuiSvgIcon-root {
      margin-right: 0.5rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const ChatContent = styled.div`
  padding: 12px 24px;
  height: 70vh;
  overflow-y: scroll;
  > h1 {
    font-size: 13px;
  }
`;

export const ChatBottom = styled.div`
  padding-bottom: 64px;
`;