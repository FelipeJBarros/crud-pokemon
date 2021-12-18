export default function pokemonHandler(data) {
  const { name, id, sprites, types } = data;

  return {
    name: formatName(name),
    id: formatId(id),
    sprite: formatSprites(sprites),
    types: formatTypes(types),
    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatId(
      id
    ).slice(-3)}.png`,
  };
}

function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function formatId(id) {
  let newId = "000" + id.toString();
  return `#${newId.slice(id.toString().length, newId.length)}`;
}
function formatSprites(sprites) {
  return sprites.front_default;
}
function formatTypes(types) {
  return types.map((type) => type.type.name);
}
