import styled from 'styled-components';
import Theme from '../../../styles/theme';

export const StyledHeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  height: 24px;
  background-color: ${Theme.layout.dark1Gray};
  border: 1px solid grey;
  border-radius: 8px;
  > .MuiTextField-root {
    outline: grey;
    fieldset {
      border: none;
    }
    input {
      background-color: ${Theme.layout.dark1Gray};
      height: 24px;
      padding: 0;
      color: grey;
    }
  }

  .searchIcon {
    color: grey;
  }
`;