import { Link } from 'react-router-dom';

import './styles.css';


function ErrorPage (): JSX.Element {
  return (
    <div className="page-error">
      <img className="error-page_img" src="img/error-page.png" alt="404 page"/>
      <h1 className="cantainer-error_page">
        Упс .. Такой страницы не существует
      </h1>
      <Link to="/"><button className="error-to-main">Вернуться на главную страницу</button> </Link>
    </div>
  );
}

export default ErrorPage;
