import { Link } from 'react-router-dom';

function NotFoundScreen() {
  return (
    <div>
      <p>Ошибка 404. Запрашиваемая страница не найдена</p>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
}

export default NotFoundScreen;
