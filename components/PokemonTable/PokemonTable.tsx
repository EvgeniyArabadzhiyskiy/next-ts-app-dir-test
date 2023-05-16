const PokemonTable = ({ pokemons }: { pokemons: any }) => {

  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon: any) => (
          <tr key={pokemon.name}>
            <td>{pokemon.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
