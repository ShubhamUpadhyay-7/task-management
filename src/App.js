import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
// import Analytics from './pages/Analytics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/analytics" element={<Analytics />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
