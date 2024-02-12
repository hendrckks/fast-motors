import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Routes style={{ flex: 1 }}>
          <Route path="/" Component={Home} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
