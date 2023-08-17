/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { openPort, sendCommand } from '../actions/comm';

interface CommState {
  entities: [];
  portState: 'open' | 'closed';
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  entities: [],
  portState: 'closed',
  loading: 'idle',
} as CommState;

const commSlice = createSlice({
  name: 'comm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(openPort.fulfilled, (state, action) => {
      state.portState = 'open';
    });
    builder.addCase(sendCommand.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(sendCommand.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.portState = 'closed';
    });
  },
});

export default commSlice.reducer;
