import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages//home/Home';
import Success from './pages/success/Success';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
