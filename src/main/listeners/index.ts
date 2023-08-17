import initializeFileListeners from './fileListener';
import initializeSerialCommListeners from './serialCommListener';

export default function initializeListeners() {
  initializeFileListeners();
  initializeSerialCommListeners();
}
