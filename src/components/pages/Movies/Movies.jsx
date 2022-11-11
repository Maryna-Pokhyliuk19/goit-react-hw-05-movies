import { SearchBar } from 'components/SearchBar/SearchBar';
import { searchMovies } from 'components/services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

export const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleFormSubmit = search => {
    setSearch(search);
    setSearchParams(query !== '' ? { query } : {});
  };

  useEffect(() => {
    if (!query && !search) {
      return;
    }
    (async function searchMovie() {
      try {
        const oneMovie = await searchMovies(search);
        setMovies(oneMovie);
      } catch (error) {}
    })();
  }, [query, search]);

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <NavLink
              className={css.moviesLink}
              to={`${id}`}
              state={{ home: location }}
            >
              {original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
