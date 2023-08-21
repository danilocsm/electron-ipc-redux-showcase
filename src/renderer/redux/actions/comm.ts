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
  return (dispatch: any) => {
    window.serialComm
      .open()
      .then(() => {
        dispatch(portOpened());
        dispatch(commandStarted());
        window.serialComm
          .send()
          .then((response) => {
            console.log(response);

            dispatch(commandFinished(response));
            dispatch(portClosed());
          })
          .catch(() => {});
      })
      .catch(() => {
        dispatch(portClosed());
      });
  };
};
