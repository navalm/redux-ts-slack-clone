import styled from 'styled-components';
import Theme from '../../../styles/theme';

export const Option = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  h3 {
    margin-left: 8px;
    font-size: 11px;
    > span {
      padding: 0 8px;
    }
  }
  &:hover {
    cursor: pointer;
    background-color: ${Theme.layout.slackPurpleDark};
    opacity: 0.9;
  }
`;

export const OptionChannel = styled.div`
  
`;