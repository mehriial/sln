import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "../components/layout/AuthLayout";
import Login from "../components/app/login";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
    //   { path: "register", element: <Register /> },
    //   { path: "forgot", element: <ForgotPassword /> },
    //   { path: "reset", element: <ResetPassword /> },
    ],
  },
//   {
//     path: "/",
//     element: <DashboardLayout />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "settings", element: <Settings /> },
//     ],
//   },
]);

export default router;
