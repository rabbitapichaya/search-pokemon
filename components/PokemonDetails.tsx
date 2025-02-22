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
  id: number;
  name: string;
  types: string[];
  attacks: {
    special: Attack[];
  };
  evolutions?: Evolution[];
}

interface PokemonDetailsProps {
  data: PokemonData;
  router: any; // You can replace 'any' with a more specific type if available
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ data, router }) => {
  console.log("Pokemon Data:", data);

const pokemonImage = data?.name
  ? `https://img.pokemondb.net/artwork/large/${data.name.toLowerCase()}.jpg`
  : "https://via.placeholder.com/200";
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.name}</h1>
      <img className={styles.image} src={pokemonImage} alt={data.name} />
      <p className={styles.type}>Type: {data.types.join(', ')}</p>
      
      <h2 className={styles.subtitle}>Special Attacks:</h2>
      <ul className={styles.list}>
        {data.attacks.special.map((attack) => (
          <li key={attack.name} className={styles.listItem}>
            {attack.name} - {attack.damage} damage
          </li>
        ))}
      </ul>

      <h2 className={styles.subtitle}>Evolutions:</h2>
      <div className={styles.evolutionContainer}>
        {data.evolutions?.map((evolution) => {
          const evolutionImage = `https://img.pokemondb.net/artwork/large/${evolution.name.toLowerCase()}.jpg`;
          return (
            <div key={evolution.name} className={styles.evolutionItem}>
              <img
                className={styles.evolutionImage}
                src={evolutionImage}
                alt={evolution.name}
              />
              <a
                className={styles.link}
                onClick={() => router.push(`/pokemon/${evolution.name.toLowerCase()}`)}
              >
                {evolution.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
  
};

export default React.memo(PokemonDetails);