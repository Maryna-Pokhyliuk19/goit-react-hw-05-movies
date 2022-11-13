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
  const filter = searchParams.get('query') ?? '';

  const handleFormSubmit = query => {
    setSearch(query);
    setSearchParams(query !== '' ? { query } : {});
  };

  useEffect(() => {
    if (!filter && !search) {
      return;
    }
    (async function searchMovie() {
      try {
        const oneMovie = await searchMovies(filter ? filter : search);
        setMovies(oneMovie);
      } catch (error) {}
    })();
  }, [filter, search]);

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <NavLink
              className={css.moviesLink}
              to={`${id}`}
              state={{ from: location }}
            >
              {original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
