/* eslint-disable import/prefer-default-export */
import { ipcRenderer } from 'electron';
import { SerialCommChannelsEnum } from 'main/channels';

export const serialCommHandler = {
  open(...args: unknown[]) {
    return ipcRenderer.invoke(SerialCommChannelsEnum.open, ...args);
  },
  send(...args: unknown[]) {
    return ipcRenderer.invoke(SerialCommChannelsEnum.send, ...args);
  },
  close(...args: unknown[]) {
    return ipcRenderer.invoke(SerialCommChannelsEnum.close, ...args);
  },
};

export type SerialCommHandler = typeof serialCommHandler;
