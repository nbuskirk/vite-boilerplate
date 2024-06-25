import React from 'react';
import { PokemonListProps } from '../types/PokemonListProps';
import { PokemonProps } from '../types/PokemonProps';
import { Link } from 'react-router-dom';

const PokemonList = ({ pokemons, goToFirst, goToLast, goToPrev, goToNext }: PokemonListProps) => {
  return (
    <table className="table-auto w-1/2 m-auto">
      <thead>
        <tr className='py-2 w-full min-h-2 flex bg-sky-300 pl-2'>
          <th>Pokemon Name</th>
        </tr>
      </thead>
      <tbody>
        {/* could break this out into a new component and just pass down a list and that component is just responsible for iterating through that list and rendering a table item. which might be reusable for other tables but for sake of simplicity i left it in this component. Dont want to pre-optimize */}
        {pokemons.map((pokemon: PokemonProps, index: number) => {
          const id = pokemon?.url?.split('v2/') && pokemon?.url?.split('v2/')[1];
          return (
            <tr key={pokemon.name}>
              <td key={pokemon.name} className={`text-black py-2 min-h-2 w-full pl-2 ${index % 2 == 0 ? 'bg-slate-100' : ''}`}>
                <Link to={`/${id}`} key={pokemon.name}>{pokemon.name}</Link>
              </td>
            </tr>
          )})}
          <tr className='py-2 w-full min-h-2 flex justify-center bg-sky-300 pl-2'>
            <th>Insert Pagination Here</th>
          </tr>
      </tbody>
    </table>
  )
};

export default PokemonList;
