import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import icon from '../../assets/icon.svg';
import './App.css';
import { RootState } from './redux/store';
import { openPort, sendCommand } from './redux/actions/comm';
import { useAppDispatch } from './redux/hooks';

function Hello() {
  const comm = useSelector((state: RootState) => state.comm);
  const dispatch = useAppDispatch();

  const onClick = async () => {
    await dispatch(openPort());
    const commandResult = await dispatch(sendCommand());
    console.log(commandResult);
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
