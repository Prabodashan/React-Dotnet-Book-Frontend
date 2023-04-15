import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

import Books from "./page/Books/Books";
import Profile from "./page/Profile/Profile";
import Authors from "./page/Authors/Authors";
import AuthorProfile from "./page/AuthorProfile/AuthorProfile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <AuthorProfile />
      <Footer />
    </div>
  );
}

export default App;
