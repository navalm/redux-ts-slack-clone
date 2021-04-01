import styled from 'styled-components';
import Theme from '../../styles/theme';

export const StyledHeader = styled.div`
  display: flex;
  flex: 1;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  background-color: ${Theme.layout.slackPurpleDark};
  color: ${Theme.layout.light0Gray};
`;