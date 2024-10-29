import './App.css';
// import Nav from './Nav';
import Nav2 from './Nav2';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}

      <Router>
        <Nav2 />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
