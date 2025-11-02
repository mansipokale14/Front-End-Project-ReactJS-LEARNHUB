import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './MyComponent/JS/HomePage';
import CoursePage from './MyComponent/JS/CoursePage';
import AboutUs from './MyComponent/JS/AboutUs';
import Login from './MyComponent/JS/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
