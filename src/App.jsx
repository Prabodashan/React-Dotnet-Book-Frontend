import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

import Books from "./page/Books/Books";
import Profile from "./page/Profile/Profile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Books />
      <Footer />
    </div>
  );
}

export default App;
