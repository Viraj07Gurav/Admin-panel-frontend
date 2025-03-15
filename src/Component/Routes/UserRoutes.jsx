import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import UserDashboard from "../website/UserDashBoard/UserDashboard";
import Mainpage from "../website/Mainpage";

export default function UserRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Mainpage />} />  Default homepage */}
      <Route path="/userdashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
    </Routes>
  );
}
