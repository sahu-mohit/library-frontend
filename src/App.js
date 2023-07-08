import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
import Navbar from './components/Navbar';
import Login from "./components/Login";
import Registration from "./components/Registration";
import ShowBook from "./components/ShowBook";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <ShowBook/> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/showbook" element={<ShowBook />} />
        </Routes>
      </Router>
      {/* <Registration/> */}
      {/* <Login/> */}
    </>
  );
}

export default App;
