import { getCastById } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    (async function getCast() {
      try {
        const cast = await getCastById(movieId);
        setCast(cast);
      } catch (error) {}
    })();
  }, [movieId]);
  if (!cast) {
    return null;
  }
  return (
    <ul className={css.castList}>
      {cast.map(({ name, character, profile_path }) => (
        <div key={name}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt=""
            width="200"
          />
          <li className={css.castItem}>{name}</li>
          <p>Character: {character}</p>
        </div>
      ))}
    </ul>
  );
};

export default Cast;
