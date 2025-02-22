import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Home.module.css';

const Home = React.memo(() => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = useCallback(() => {
    if (search) router.push(`/pokemon/${search.toLowerCase()}`);
  }, [search, router]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Pokémon</h1>
      <div className={styles.searchBox}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Pokémon name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className={styles.button} onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
});

export default Home;