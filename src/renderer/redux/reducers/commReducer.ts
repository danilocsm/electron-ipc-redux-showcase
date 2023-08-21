/* eslint-disable default-param-last */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { COMM_ACTIONS, sendCommand } from '../actions/comm';

export interface CommState {
  commandData: any;
  portState: 'open' | 'closed';
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  commandData: '',
  portState: 'closed',
  loading: 'idle',
} as CommState;

export default function commReducer(state = initialState, action: any) {
  switch (action.type) {
    case COMM_ACTIONS.COMMAND_STARTED:
      return { ...state, loading: 'pending' };
    case COMM_ACTIONS.PORT_OPENED:
      return { ...state, portState: 'open' };
    case COMM_ACTIONS.PORT_CLOSED:
      return { ...state, portState: 'closed' };
    case COMM_ACTIONS.COMMAND_FINISHED:
      return { ...state, loading: 'idle', commandData: action.payload };
    default:
      return state;
  }
}
