import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HeaderSearch from './HeaderSearch';
import { StyledHeader } from './style';

const Header = (props: any) => {
  const {} = props;
  return (
    <StyledHeader>
      <HeaderLeft />
      <HeaderSearch />
      <HeaderRight />
    </StyledHeader>
  )
}

export default Header;