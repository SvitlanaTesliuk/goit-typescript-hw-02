import React, { useState } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
