import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import BackIcon from '@material-ui/icons/ArrowBack';
import ForwardIcon from '@material-ui/icons/ArrowForward';
import TimeIcon from '@material-ui/icons/ScheduleSharp';
import { StyledHeaderLeft } from './style';
import { auth } from '../../../firebase';

const HeaderLeft = (props: any) => {
  // const {} = props;
  const [user] = useAuthState(auth);
  return (
    <StyledHeaderLeft>
      <Tooltip onClick={() => auth.signOut()} title="Logout">
        <Avatar 
          className={'avatar'} 
          src={user?.photoURL? user.photoURL: undefined}
          alt={user?.displayName? user.displayName: undefined}
        />
      </Tooltip>
      <span className={'buttons'}>
        <BackIcon />
        <ForwardIcon />
        <TimeIcon />
      </span>
    </StyledHeaderLeft>
  )
}

export default HeaderLeft;