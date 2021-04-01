import styled from 'styled-components';


export const StyledHeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .buttons {
    display: flex;
    justify-content: space-between;
    width: 7rem;
    margin-right: 0.5rem;
    > .MuiSvgIcon-root {
      &:hover {
        cursor: pointer;
      }
    }
  }

  > .avatar {
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;