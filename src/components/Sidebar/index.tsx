import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import DownIcon from '@material-ui/icons/ExpandMoreSharp';
import FiberIcon from '@material-ui/icons/FiberManualRecordSharp';
import CreateIcon from '@material-ui/icons/CreateSharp';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { StyledSidebar, SidebarHeader } from './style';
import SidebarOption from './SidebarOption';

const sidebarOpts = [
  { index: 0, icon: InsertCommentIcon, title: 'Threads'},
  { index: 1, icon: InboxIcon, title: 'Mentions & reactions'},
  { index: 2, icon: DraftsIcon, title: 'Saved items'},
  { index: 3, icon: BookmarkBorderIcon, title: 'Channel browser'},
  { index: 4, icon: PeopleAltIcon, title: 'People & user groups'},
  { index: 5, icon: AppsIcon, title: 'Apps'},
  { index: 6, icon: FileCopyIcon, title: 'File browser'},
  { index: 7, icon: ExpandLessIcon, title: 'Show less'},
]

const Sidebar = (props: any) => {
  // const {} = props;
  const [channels, loading, error] = useCollection(db.collection('rooms'));
  return (
    <StyledSidebar>
      <SidebarHeader>
        <Grid 
          container
          justify="space-between"
          alignItems="center"
          className={'info'}
        >
          <Grid item>
            <h1>Slack HQ&nbsp;<DownIcon /></h1>
            <h3><FiberIcon className={'online'} />&nbsp;Naval Monga</h3>
          </Grid>
          <Grid item>
            <Fab size="small">
              <CreateIcon />
            </Fab>
          </Grid>
        </Grid>
      </SidebarHeader>
      {
        sidebarOpts.map((sidebarOpt) => {
          return (
            <SidebarOption
              key={sidebarOpt.index}
              Icon={sidebarOpt.icon}
              title={sidebarOpt.title}
            />
          );
        })
      }
      <hr className={'custom'} />
      <SidebarOption
        key={'channels'}
        Icon={ExpandMoreIcon}
        title={'Channels'}
      />
      <hr className={'custom'} />
      <SidebarOption
        key={'add channel'}
        Icon={AddIcon}
        title={'Add Channel'}
        addChannelOption
      />
      {
        channels?.docs.map((channel) => {
          return (
            <SidebarOption
              id={channel.id}
              key={channel.id}
              title={channel.data().name}
            />
          );
        })
      }
    </StyledSidebar>
  )
}

export default Sidebar;