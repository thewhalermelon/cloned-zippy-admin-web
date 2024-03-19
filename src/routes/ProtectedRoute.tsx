import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  children: JSX.Element;
}

const ProtectedRoute: FC<IProps> = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = JSON.parse(localStorage.getItem('is-auth') || 'false');

  if (!isAuthenticated) {
    return <Navigate to={'/login'} replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
