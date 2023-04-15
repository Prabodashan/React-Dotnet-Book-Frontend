import "./App.css";
import Footer from "./components/Footer/Footer";

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./page/Profile/Profile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
