import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

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
          <Route path="/contact" Component={Contact} />
          <Route Component={PrivateRoute}>
            <Route path="/profile" Component={Profile} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
