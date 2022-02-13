const getImage = async () => {
  const id = Math.floor(Math.random() * 1000) + 1;

  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await resp.json();

  return data.sprites.other['official-artwork'].front_default;
};
export default getImage;
