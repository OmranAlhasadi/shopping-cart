
import './App.css';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/catalog" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
