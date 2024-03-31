import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../../const.ts';
import { useAppSelector } from '../../hooks/store-hooks.ts';
import { getUserInfo } from '../../store/user/user-selectors.ts';

type PrivateRouteProps = {
  children: JSX.Element;
  isReverse?: boolean;
}

function PrivateRoute({children, isReverse}: PrivateRouteProps): JSX.Element {

  const user = useAppSelector(getUserInfo);
  if (user && isReverse) {
    return <Navigate to={AppRoutes.Main} />;
  }
  if (!user && !isReverse) {
    return <Navigate to={AppRoutes.Login} />;
  }

  return children;
}

export default PrivateRoute;
