/* eslint-disable @typescript-eslint/no-unused-vars */
import { ipcMain } from 'electron';
import { FileChannelsEnum } from '../channels';

export default function initializeFileListeners() {
  ipcMain.handle(FileChannelsEnum.read, async (event, args) => {
    // do something
    return 'file content here';
  });

  ipcMain.handle(FileChannelsEnum.save, async (event, args) => {
    // do something
  });

  ipcMain.handle(FileChannelsEnum.write, async (event, args) => {
    // do something
  });

  ipcMain.handle(FileChannelsEnum.mkdir, async (event, args) => {
    // do something
  });
}
