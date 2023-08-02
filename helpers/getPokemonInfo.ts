export const getPokemonInfo = async (): Promise<any> => {
  // await new Promise(res => setTimeout(() => res(777), 5000))

  const req = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`,
  // {cache: 'no-store'}
  );
  const data = (await req.json()) as any;

  return data.results;
};
