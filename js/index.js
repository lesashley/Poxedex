'use strict';

const render = (root,data) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Search())


  root.append(wrapper);
}

const state = {
  pokemon : null,
  selectedPokemon: null
};

$( _ => {
  getPokemons((err, data) => {
    if (err) console.log(err);
    const root = $("#root");
    state.pokemon=data;
    console.log(typeof(state.pokemon));
    console.log(state.pokemon.results[1].name);
    // console.log(state.pokemon.pokemon_entries.pokemon_species.name);
    render(root,data);
  });
})
