import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

import Books from "./page/Books/Books";
import Profile from "./page/Profile/Profile";
import Authors from "./page/Authors/Authors";
import AuthorProfile from "./page/AuthorProfile/AuthorProfile";
import SingleBook from "./page/SingleBook/SingleBook";
import ContactUs from "./page/ContactUs/ContactUs";
import Home from "./page/Home/Home";
import AddBook from "./page/AddBook/AddBook";

const Layout = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/singlebook/:id",
        element: <SingleBook />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/authors",
        element: <Authors />,
      },
      {
        path: "/authorprofile",
        element: <AuthorProfile />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/addbook",
        element: <AddBook />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
