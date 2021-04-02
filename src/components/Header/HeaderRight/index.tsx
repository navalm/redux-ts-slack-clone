import React from 'react';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import { StyledHeaderRight } from './style';

const HeaderRight = (props: any) => {
  // const {} = props;
  return (
    <StyledHeaderRight>
      <InfoIcon />
    </StyledHeaderRight>
  )
}

export default HeaderRight;