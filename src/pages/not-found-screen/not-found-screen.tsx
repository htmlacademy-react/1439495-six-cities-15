import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const.ts';
import './not-found-screen.css';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="body">
      <section id="not-found">
        <div id="title"><Link to={AppRoutes.Main}>Вернуться на главную</Link> &bull; 404 Error Page</div>
        <div className="circles">
          <p>404<br />
            <small>PAGE NOT FOUND</small>
          </p>
          <span className="circle big"></span>
          <span className="circle med"></span>
          <span className="circle small"></span>
        </div>
      </section>
    </div>
  );
}

export default NotFoundScreen;
