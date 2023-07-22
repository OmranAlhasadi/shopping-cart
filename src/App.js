
import './App.css';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
