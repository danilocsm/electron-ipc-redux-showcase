import { ipcRenderer } from 'electron';
import { FileChannelsEnum } from '../channels';

export const fileHandler = {
  readFile: (...args: unknown[]) => {
    return ipcRenderer.invoke(FileChannelsEnum.read, ...args);
  },
  writeFile: (...args: unknown[]) => {
    return ipcRenderer.invoke(FileChannelsEnum.write, ...args);
  },
  mkdir: (...args: unknown[]) => {
    return ipcRenderer.invoke(FileChannelsEnum.mkdir, ...args);
  },
  saveFile: (...args: unknown[]) => {
    return ipcRenderer.invoke(FileChannelsEnum.save, ...args);
  },
};

export type FileHandler = typeof fileHandler;
