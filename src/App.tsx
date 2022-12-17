import React, { PropsWithChildren, ReactElement, ReactNode } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { MainLayout } from "./Layouts/mainLayout";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./store/auth/selectors";

type TProtectedRouteProps = {
  children: ReactElement;
};

function App() {
  const user = useSelector(selectCurrentUser);
  const ProtectedRoute: React.FC<TProtectedRouteProps> = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
