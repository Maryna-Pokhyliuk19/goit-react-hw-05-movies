import { useState } from 'react';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  const handleNameChange = event => {
    setSearch(event.currentTarget.value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={css.formInput}
        type="text"
        placeholder="Enter film..."
        onChange={handleNameChange}
      />
      <button className={css.formButton} type="submit" label>
        search
      </button>
    </form>
  );
};
