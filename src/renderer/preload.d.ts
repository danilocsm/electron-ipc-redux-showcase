import { FileHandler } from 'main/handlers/fileHandler';
import { SerialCommHandler } from 'main/handlers/serialCommHandler';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    fileSystem: FileHandler;
    serialComm: SerialCommHandler;
  }
}

export {};
