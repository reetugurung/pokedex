type PokemonCardProps = {
  name: string;
  index: number;
};

const PokemonCard = ({ name, index }: PokemonCardProps) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
    index + 1
  }.png`;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg p-4 text-center transition-transform hover:-translate-y-1">
      <img
        src={imageUrl}
        alt={name}
        className="w-28 h-28 mx-auto mb-3"
        loading="lazy"
      />
      <h3 className="capitalize font-semibold text-gray-700">{name}</h3>
    </div>
  );
};

export default PokemonCard;