import React from 'react';
import { useDispatch } from 'react-redux';
import { Option, OptionChannel } from './style';
import { enterRoom } from '../../../features/appSlice';
import { db } from '../../../firebase';


const SidebarOption = (props: any) => {
  const { id, Icon, title, addChannelOption } = props;
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name:");

    if (channelName) {
      db.collection('rooms').add({
        name: channelName
      });
    }
  };

  const selectChannel = () => {
    // push id to redux store
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <Option
      onClick={addChannelOption? addChannel: selectChannel}
    >
      {Icon && <Icon fontSize="small" />}
      {Icon ? (
        <h3>{title}</h3>
      ): (
        <OptionChannel>
          <h3><span>#</span>{title}</h3>
        </OptionChannel>
      )}
    </Option>
  );
}

export default SidebarOption;