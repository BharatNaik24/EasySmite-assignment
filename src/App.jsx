import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import LandingPage from "./components/landingPage/landingPage";
import Filter from "./components/filter/filter";
import Products from "./components/products/products";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <div className="d-flex p-4">
        <Filter />
        <Products />
      </div>
      <Footer />
    </div>
  );
}

export default App;
