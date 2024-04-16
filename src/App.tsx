import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import VerifyEmail from "./pages/VerifyEmail";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/signup" /> },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/verifyemail",
    element: <VerifyEmail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
