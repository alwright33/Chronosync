import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";

export const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="*"
        element={
          // check if user is authorized
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};