import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const.ts';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo-link" to={AppRoutes.Main} data-testid='logo'>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default Logo;
