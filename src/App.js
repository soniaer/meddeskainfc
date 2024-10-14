
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import NFC from './screens/NFC';
import Patients from './screens/View';
function App() {
  return (
    <div >
      <HashRouter>
      <Routes>
  
      <Route path="/" element={<NFC />} />
         <Route path="/view" element={<Patients />} />
      </Routes>
      </HashRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
