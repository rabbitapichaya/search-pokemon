import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import test from 'node:test';

const mockPokemon = {
  name: 'Bulbasaur',
  types: ['Grass'],
};

test('renders Pokémon name and type', () => {
  render(<div>{mockPokemon.name} - {mockPokemon.types[0]}</div>);
  expect(screen.getByText('Bulbasaur - Grass')).toBeInTheDocument();
});
