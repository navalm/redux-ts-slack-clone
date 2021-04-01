import styled from 'styled-components';
import Theme from '../../styles/theme';

export const StyledSidebar = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 56px 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${Theme.layout.slackPurple};
  color: ${Theme.layout.light0Gray};
  > hr.custom {
    border: 0;
    height: 0.5px;
    background-color: rgba(155,155,155, 0.8);
    margin: 1px 0;
  }
`;

export const SidebarHeader = styled.div`
  flex: 0.08;
  width: 100%;
  padding: 12px 0;
  border-top: 0.5px solid rgba(155,155,155, 0.8);
  border-bottom: 0.5px solid rgba(155,155,155, 0.8);
  h1 {
    display: flex;
    align-items: center;
    font-size: 15px;
    text-transform: uppercase;
    margin-right: 16px;
  }
  h3 {
    display: flex;
    align-items: center;
    margin-top: 2px;
    font-size: 11px;
    > .online {
      font-size: 18px;
      color: ${Theme.layout.success};
    }
  }
  > .info {
    padding: 8px 24px;
  }
  &:hover {
    background-color ${Theme.layout.slackPurpleDark};
    cursor: pointer;
  }
`;