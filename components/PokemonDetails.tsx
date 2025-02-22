import React from 'react';
import styles from '../styles/Pokemon.module.css';

interface Attack {
  name: string;
  damage: number;
}

interface Evolution {
  name: string;
}

interface PokemonData {
  name: string;
  types: string[];
  attacks: {
    special: Attack[];
  };
  evolutions?: Evolution[];
}

const PokemonDetails = ({ data, router }: { data: PokemonData; router: any }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.name}</h1>
      <p className={styles.type}>Type: {data.types.join(', ')}</p>
      <h2 className={styles.subtitle}>Special Attacks:</h2>
      <ul className={styles.list}>
        {data.attacks.special.map((attack) => (
          <li key={attack.name} className={styles.listItem}>{attack.name} - {attack.damage} damage</li>
        ))}
      </ul>
      <h2 className={styles.subtitle}>Evolutions:</h2>
      <ul className={styles.list}>
        {data.evolutions?.map((evolution) => (
          <li key={evolution.name} className={styles.listItem}>
            <a className={styles.link} onClick={() => router.push(`/pokemon/${evolution.name.toLowerCase()}`)}>
              {evolution.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(PokemonDetails);