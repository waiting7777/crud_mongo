const fs = require('fs');
const csvtojson = require('csvtojson');
const Pokemon = require('./db');

var Converter = csvtojson.Converter;
var converter = new Converter({});

converter.on('end_parsed', function(data){
    for(var i = 0; i < data.length; i++){
        Pokemon.findOneAndUpdate({
            PokemonId : i
        },{
            Flavor : data[i].Flavor
        }, function(err, p){
            if(err) throw err;

            console.log(p);
        });

    }
});

fs.createReadStream('../pokemon/pokemon.csv').pipe(converter);
