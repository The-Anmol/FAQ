import './App.css';
import { Routes, Route } from "react-router-dom"
// Components
import FAQ from './FAQ';


function App() {
  return (
    <Routes>

      <Route path='/' element={<FAQ />} />

    </Routes>
  );
}

export default App;
