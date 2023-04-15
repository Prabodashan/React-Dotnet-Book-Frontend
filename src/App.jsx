import "./App.css";
import Footer from "./components/Footer/Footer";

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Home from "./page/home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
