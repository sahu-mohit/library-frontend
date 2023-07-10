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
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/allbooks" element={<ShowBook />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/nav" element={<Navbar />} />
        </Routes>
      </Router>
      {/* <Registration/> */}
      {/* <Login/> */}
    </>
  );
}

export default App;
