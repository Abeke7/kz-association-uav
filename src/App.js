import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// component
import Main from './component/Main';
import Navbar from './component/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;