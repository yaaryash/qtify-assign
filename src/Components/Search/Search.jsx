import React from "react";
import styles from "./Search.module.css";

const Search = ({ placeholder }) => {
  return (
    <form className={styles.wrapper}>
      <div>
        <input className={styles.search} placeholder={placeholder} />
      </div>
      <div>
        <button
          className={styles.searchButton}
          type="
        submit"
        >
          <img src="Search icon.png" alt="Seach logo" height="100%" />
        </button>
      </div>
    </form>
  );
};

export default Search;
