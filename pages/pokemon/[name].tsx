import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../../styles/Pokemon.module.css';

const PokemonDetails = dynamic(() => import('../../components/PokemonDetails'), { ssr: false });

const GET_POKEMON = gql`
  query GetPokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      types
      attacks {
        special {
          name
          damage
        }
      }
      evolutions {
        name
      }
    }
  }
`;

const PokemonPage = React.memo(() => {
  const router = useRouter();
  const { name } = router.query;
  const { data, loading, error } = useQuery(GET_POKEMON, { variables: { name } });

  if (loading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>Error loading Pokémon</p>;
  if (!data.pokemon) return <p className={styles.notFound}>Pokémon not found</p>;

  return <PokemonDetails data={data.pokemon} router={router} />;
});

export default PokemonPage;