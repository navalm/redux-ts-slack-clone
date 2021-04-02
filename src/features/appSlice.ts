import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AppThunk, RootState } from '../app/store';

interface CounterState {
  roomId: number | null;
  roomName: string;
}

const initialState: CounterState = {
  roomId: null,
  roomName: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    enterRoom: (state, action: PayloadAction<any>) => {
      state.roomId = action.payload.roomId;
      state.roomName = action.payload.roomName;
    }
  },
});

export const { enterRoom } = appSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectRoomId = (state: any) => state.app.roomId;
export const selectRoomName = (state: any) => state.app.roomName;

export default appSlice.reducer;
