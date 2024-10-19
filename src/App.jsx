import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import Header from "./components/header/header";
import LandingPage from "./components/landingPage/landingPage";
import Filter from "./components/filter/filter";
import Products from "./components/products/products";
import Footer from "./components/footer/footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <LandingPage />
        <div className="p-4 filterAndProductClass">
          <Filter />
          <Routes>
            <Route path="/" element={<Products />} /> {/* Home page */}
          </Routes>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
