import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink className={`${css.link} ${css.active}`} to="/">
          Home
        </NavLink>
        <NavLink className={`${css.link}`} to="movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
