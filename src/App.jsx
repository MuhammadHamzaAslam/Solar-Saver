import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TransparentPricing from "./Components/TransparentPricing";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TransparentPricing/>
      <AboutUs/>
    </>
  );
}

export default App;
