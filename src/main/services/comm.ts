/* eslint-disable consistent-return */
import { ByteLengthParser, SerialPort } from 'serialport';

const convertBytesArrayToString = (data: number[]) =>
  Buffer.from(Array.from(data)).toString();

let portInstance: SerialPort;
let piperInstance: ByteLengthParser;

export async function openPort() {
  const ports = await SerialPort.list();

  if (ports.length === 0) return;

  portInstance = new SerialPort(
    { path: ports[0].path, baudRate: 38400 },
    (error) => {
      if (error) return { status: false, data: undefined };
    }
  );
  piperInstance = portInstance.pipe(new ByteLengthParser({ length: 1 }));
  return { status: true, data: undefined };
}

export async function sendCommand() {
  function waitForData(timeout: number) {
    const raw: number[] = [];

    return new Promise<Array<number>>((resolve) => {
      const timeoutId = setTimeout(() => {
        resolve([]);
        clearTimeout(timeoutId);
      }, timeout);

      piperInstance.on('data', (data: Buffer) => {
        console.log(data);

        raw.push(...data);

        if (data.includes(3)) {
          piperInstance.removeAllListeners();
          resolve(raw);
        }
      });
    });
  }

  function writeData() {
    return new Promise<boolean>((resolve) => {
      portInstance.write([2, 6, 60, 0, 0, 3], (error) => {
        if (error) {
          console.log(error);
          resolve(false);
        }
        piperInstance.on('data', (data) => {
          if (data.includes(6)) resolve(true);
          resolve(false);
        });
      });
    });
  }

  const operationReturn = await writeData();
  if (!operationReturn) {
    portInstance.close();
    return [];
  }
  const readData = await waitForData(10000);
  console.log('data read', readData);
  portInstance.close();
  // eslint-disable-next-line consistent-return
  return convertBytesArrayToString(readData);
}
