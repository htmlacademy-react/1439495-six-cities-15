import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const.ts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoutes.Login} />
  );
}

export default PrivateRoute;
