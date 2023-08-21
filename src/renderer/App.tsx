import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import icon from '../../assets/icon.svg';
import './App.css';
import { sendCommand } from './redux/actions/comm';

function Hello({ portState, commandState, onClick }: any) {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>SerialPort Demo</h1>
      <h2>{`Port State: ${portState}`}</h2>
      <div className="Hello">
        <button type="button" onClick={onClick}>
          {commandState === 'pending'
            ? 'Esperado comando terminar...'
            : 'Enviar comando'}
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ comm }: any) => {
  return {
    portState: comm.portState,
    commandState: comm.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onClick: async () => {
      const response = await dispatch(sendCommand());

      console.log(response);
    },
  };
};

const MainComponent = connect(mapStateToProps, mapDispatchToProps)(Hello);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
      </Routes>
    </Router>
  );
}
