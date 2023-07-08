import React from "react";
import Square from './Square'



const PokeDex = ({ pokemon }) => {
  
  return (
    <div>
      
      <div>
        {pokemon.map((i) => (
          <Square
            key={i.id}
            name={i.name}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i.id}.png`}
            type={i.type}
            experience={i.base_experience}
          />
        ))}
      </div>
      
    </div>
  );
};

export default PokeDex;