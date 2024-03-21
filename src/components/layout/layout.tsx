import { Outlet, Link, useLocation } from 'react-router-dom';
import Logo from '../logo/logo.tsx';
import { AppRoutes, AuthorizationStatus } from '../../const.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks.ts';
import { logoutAction } from '../../store/api-actions.ts';

function getClassName(isLoginPage: boolean, isFavoritePage: boolean, isOfferPage: boolean): string {
  let pageClassName = 'page';
  if (isOfferPage || isFavoritePage) {
    return pageClassName;
  }
  if (isLoginPage) {
    pageClassName += 'page--gray page--login';
    return pageClassName;
  }
  pageClassName += 'page--gray page--main';
  return pageClassName;
}

function Layout(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userInfo = useAppSelector((state) => state.userInfo);

  const {pathname} = useLocation();
  const dispatch = useAppDispatch();

  const isLoginPage = pathname === AppRoutes.Login;
  const isFavoritePage = pathname === AppRoutes.Favorites;
  const isOfferPage = pathname.includes('offer');

  const mainClassName = getClassName(isLoginPage, isFavoritePage, isOfferPage);

  const handleSignOutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <div className={mainClassName}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            {isLoginPage ? null : (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {authorizationStatus === AuthorizationStatus.Auth && (
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{userInfo && userInfo.email}</span>
                        <span className="header__favorite-count">3</span>
                      </Link>
                    </li>
                  )}
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoutes.Login}>
                      {authorizationStatus === AuthorizationStatus.Auth ?
                        (<span className="header__signout" onClick={handleSignOutClick}>Sign out</span>)
                        : (<><div className="header__avatar-wrapper user__avatar-wrapper"></div><span className="header__login">Sign in</span></>)}
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
      <Outlet />
      {isFavoritePage ? (
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoutes.Main}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      ) : null}
    </div>
  );
}

export default Layout;
