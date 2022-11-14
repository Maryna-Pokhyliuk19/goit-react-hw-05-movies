import { getTrending } from 'components/services/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    (async function fetchFilms() {
      try {
        const trending = await getTrending();
        setFilms(trending);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {films.length !== 0 && (
        <ul>
          {films.map(({ id, original_title }) => (
            <li key={id}>
              <Link className={css.trendLink} to={`movies/${id}`}>
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
