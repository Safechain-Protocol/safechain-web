import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1200, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
    });
  });

  return (
    <div className="d-flex flex-column">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
