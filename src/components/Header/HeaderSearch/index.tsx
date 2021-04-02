import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { StyledHeaderSearch } from './style';

const HeaderSearch = (props: any) => {
  // const {} = props;
  return (
    <StyledHeaderSearch>
      <TextField 
        size="small" 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className={'searchIcon'} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        placeholder="Search community" 
      />
    </StyledHeaderSearch>
  )
}

export default HeaderSearch;