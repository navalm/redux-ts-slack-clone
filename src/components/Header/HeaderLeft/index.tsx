import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import BackIcon from '@material-ui/icons/ArrowBack';
import ForwardIcon from '@material-ui/icons/ArrowForward';
import TimeIcon from '@material-ui/icons/ScheduleSharp';
import { StyledHeaderLeft } from './style';

const HeaderLeft = (props: any) => {
  const {} = props;
  return (
    <StyledHeaderLeft>
      <Avatar className={'avatar'} />
      <span className={'buttons'}>
        <BackIcon />
        <ForwardIcon />
        <TimeIcon />
      </span>
    </StyledHeaderLeft>
  )
}

export default HeaderLeft;