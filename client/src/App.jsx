import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Routes style={{ flex: 1 }}>
          <Route path="/" Component={Home} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/login" Component={Login} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
