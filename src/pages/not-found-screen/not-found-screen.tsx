import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

function NotFoundScreen() {
  return (
    <div>
      <p>Ошибка 404. Запрашиваемая страница не найдена</p>
      <Link to={AppRoutes.Main}>Вернуться на главную страницу</Link>
    </div>
  );
}

export default NotFoundScreen;
