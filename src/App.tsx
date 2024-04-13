import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
