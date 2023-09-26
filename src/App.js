import Layout from './components/common/Layout';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import State from './pages/State';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contactus from './pages/Contactus';

const router = createBrowserRouter([
  {
    path: "jjk",
    element: <State />
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contactus />
      },
      
    ]
  },


]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
