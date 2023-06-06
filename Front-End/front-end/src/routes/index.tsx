import { Navigate, Route, Routes } from "react-router-dom";
import { LoginRegister } from "../pages/LoginRegister";
import { Dashboard } from "../pages/Dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginRegister />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
