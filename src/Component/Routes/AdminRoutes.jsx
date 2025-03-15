import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Dashboard from "../Dashboard";
import UsersData from "../UsersData";
import UpdateUser from "../User";
import Mainpage from "../website/Mainpage";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<ProtectedRoute requiredRole='admin'><Dashboard /></ProtectedRoute>} />
      <Route path="/userdata" element={<ProtectedRoute requiredRole='admin'><UsersData /></ProtectedRoute>} />
      <Route path="/Users/:id" element={<ProtectedRoute requiredRole='admin'><UpdateUser /></ProtectedRoute>} />
 
    </Routes>
  );
}
