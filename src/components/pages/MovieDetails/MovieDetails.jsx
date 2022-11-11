import { getMovieById } from 'components/services/api';
import { BackLink } from 'components/BackLink/BackLink';
import { Link } from 'react-router-dom';

import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    (async function getMovie() {
      try {
        const movieInfo = await getMovieById(movieId);
        setMovie(movieInfo);
      } catch (error) {}
    })();
  }, [movieId]);

  if (!movie) {
    return null;
  }
  const {
    backdrop_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  const genresNames = genres.map(genre => genre.name).join(', ');

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div className={css.sectionFilm}>
        <div className={css.imageBox}>
          <img
            src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
            alt={`${original_title}`}
          />
        </div>
        <div className={css.imageCard}>
          <h2>{`${original_title} (${new Date(
            release_date
          ).getFullYear()})`}</h2>
          <p>{`User score: ${vote_average * 10} %`}</p>
          <h3>Overview</h3>
          <p>{`${overview}`}</p>
          <h4>Genres</h4>
          <p>{genresNames}</p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul className={css.additional}>
          <li>
            <Link className={css.additionalLink} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.additionalLink} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
