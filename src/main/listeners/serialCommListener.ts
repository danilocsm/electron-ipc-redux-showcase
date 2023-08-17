/* eslint-disable @typescript-eslint/no-unused-vars */
import { ipcMain } from 'electron';
import { SerialCommChannelsEnum } from '../channels';
import { openPort, sendCommand } from '../services/comm';

export default function initializeSerialCommListeners() {
  ipcMain.handle(SerialCommChannelsEnum.open, openPort);

  ipcMain.handle(SerialCommChannelsEnum.send, sendCommand);

  ipcMain.handle(SerialCommChannelsEnum.close, async (event, args) => {
    // do something
  });
}
