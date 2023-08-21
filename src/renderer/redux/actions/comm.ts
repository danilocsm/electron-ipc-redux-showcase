/* eslint-disable promise/always-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
export const COMM_ACTIONS = {
  SEND_COMMAND: 'comm/sendCommand',
  COMMAND_STARTED: 'comm/commandStarted',
  COMMAND_FINISHED: 'comm/commandFinished',
  PORT_OPENED: 'comm/portOpened',
  PORT_CLOSED: 'comm/portClosed',
} as const;

export const commandStarted = () => ({ type: COMM_ACTIONS.COMMAND_STARTED });

export const commandFinished = (payload: any) => ({
  type: COMM_ACTIONS.COMMAND_FINISHED,
  payload,
});

export const portOpened = () => ({ type: COMM_ACTIONS.PORT_OPENED });

export const portClosed = () => ({ type: COMM_ACTIONS.PORT_CLOSED });

export const sendCommand = () => {
  return async (dispatch: any) => {
    await window.serialComm.open();
    dispatch(portOpened());
    dispatch(commandStarted());
    const response = await window.serialComm.send();
    dispatch(commandFinished(response));
    dispatch(portClosed());
    return response;
  };
};
