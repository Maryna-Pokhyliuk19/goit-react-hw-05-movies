import { getTrending } from 'components/services/api';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
      <h1>Trending</h1>
      <ul>
        {films.map(({ id, original_title }) => (
          <li key={id}>
            <NavLink to={`movies/${id}`}>{original_title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
