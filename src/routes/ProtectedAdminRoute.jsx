import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Wrap any admin route you want to protect:
 * 
 * <Route
 *   path="/admin/dashboard"
 *   element={
 *     <ProtectedAdminRoute>
 *       <AdminDashboard />
 *     </ProtectedAdminRoute>
 *   }
 * />
 */
export default function ProtectedAdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token && role === "admin") {
    return children;
  } else {
    return <Navigate to="/admin-login" replace />;
  }
}
// ✅ Add this
ProtectedAdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

