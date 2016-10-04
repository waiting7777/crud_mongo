const Pokemon = require('./db');

Pokemon.find({}, function(err, pokemons){
    if(err) throw err;

    console.log(pokemons);
});
