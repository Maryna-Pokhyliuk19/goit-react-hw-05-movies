import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.link)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.link)}
          to="movies"
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
