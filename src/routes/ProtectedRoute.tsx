import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  isAuthenticated: boolean;
  authenticationPath: string;
  children: JSX.Element;
}

const ProtectedRoute: FC<IProps> = ({ isAuthenticated, authenticationPath, children }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={authenticationPath} replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
