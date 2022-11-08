import { getTrending } from 'components/services/api';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
      <ul>
        {films.map(({ id, original_title }) => (
          <li key={id}>
            <NavLink className={css.trendLink} to={`movies/${id}`}>
              {original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
