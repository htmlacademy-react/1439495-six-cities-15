import { Location, Navigate, useLocation } from 'react-router-dom';
import { AppRoutes } from '../../const.ts';
import { useAppSelector } from '../../hooks/store-hooks.ts';
import { getUserInfo } from '../../store/user/user-selectors.ts';

type PrivateRouteProps = {
  children: JSX.Element;
  isReverse?: boolean;
}

type LocationType = {
  from?: Location;
}

function PrivateRoute({children, isReverse}: PrivateRouteProps): JSX.Element {
  const location: Location<LocationType> = useLocation() as Location<LocationType>;
  const user = useAppSelector(getUserInfo);

  if (user && isReverse) {
    const from = location.state?.from || { pathname: AppRoutes.Main };
    return <Navigate to={from} />;
  }
  if (!user && !isReverse) {
    return <Navigate state={{ from: location }} to={AppRoutes.Login} />;
  }

  return children;
}

export default PrivateRoute;
