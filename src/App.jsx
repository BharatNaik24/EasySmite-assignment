import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import Header from "./components/header/header";
import LandingPage from "./components/landingPage/landingPage";
import Filter from "./components/filter/filter";
import Products from "./components/products/products";
import Footer from "./components/footer/footer";
import { ToastContainer } from "react-toastify";

import { ProductProvider } from "./context/ProductContext";
import { plantData } from "./plantData/plantData";
import ThankYouPage from "./pages/thankYouPage/thankyoupage";

function App() {
  return (
    <ProductProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingPage />
                  <div className="p-4 filterAndProductClass">
                    <Filter />
                    <Products selectProduct={plantData} />
                  </div>
                </>
              }
            />
            <Route path="/thankyoupage" element={<ThankYouPage />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
