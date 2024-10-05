import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TransparentPricing from "./Components/TransparentPricing";
import AboutUs from "./Components/AboutUs";
import AiUtilization from "./Components/AiUtilization";
import Tools from "./Components/Tools";
import Equipment from "./Components/Equipment";
import Map from "./Components/Map";
import Testinomials from "./Components/Testinomials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TransparentPricing/>
      <AboutUs/>
      <AiUtilization/>
      <Tools/>
      <Equipment/>
      <Map/>
      <Testinomials/>
    </>
  );
}

export default App;
