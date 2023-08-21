import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../assets/icon.svg';
import './App.css';
import { RootState } from './redux/store';
import { sendCommand } from './redux/actions/comm';
import { CommState } from './redux/reducers/commReducer';

function Hello() {
  const comm = useSelector((state: RootState) => state.comm) as CommState;
  const dispatch = useDispatch();

  const onClick = async () => {
    dispatch(sendCommand());
  };

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>SerialPort Demo</h1>
      <h2>{`Port State: ${comm.portState}`}</h2>
      <div className="Hello">
        <button type="button" onClick={onClick}>
          {comm.loading === 'pending'
            ? 'Esperado comando terminar...'
            : 'Enviar comando'}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
