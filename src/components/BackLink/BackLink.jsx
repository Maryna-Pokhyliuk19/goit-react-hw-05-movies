import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import css from './backlink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link className={css.backLink} to={to}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};
