/* eslint-disable no-restricted-syntax */
// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge } from 'electron';
import { fileHandler } from './handlers/fileHandler';
import { serialCommHandler } from './handlers/serialCommHandler';

contextBridge.exposeInMainWorld('fileSystem', fileHandler);
contextBridge.exposeInMainWorld('serialComm', serialCommHandler);
