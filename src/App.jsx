import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/index.scss";

function App() {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
