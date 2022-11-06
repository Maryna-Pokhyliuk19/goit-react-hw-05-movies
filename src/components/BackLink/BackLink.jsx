import { HiArrowLeft } from 'react-icons/hi';
import css from './backlink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink className={css.backLink} to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
