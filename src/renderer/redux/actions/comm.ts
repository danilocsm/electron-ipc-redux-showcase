/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const openPort = createAsyncThunk('comm/openPort', async (thunkApi) => {
  const response = await window.serialComm.open();
});

export const sendCommand = createAsyncThunk(
  'comm/sendCommand',
  async (thunkApi) => {
    const response = await window.serialComm.send();
    return response;
  }
);
