import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function ProtectedRoutes({ user, children }) {
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
}

ProtectedRoutes.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
};
