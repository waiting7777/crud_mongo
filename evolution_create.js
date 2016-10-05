const fs = require('fs');
const csvtojson = require('csvtojson');
const Evolution = require('./db');

var Converter = csvtojson.Converter;
var converter = new Converter({});

var newEvolution = Evolution({});

converter.on('end_parsed', function(data){
    for(var i = 0; i < data.length; i++){
        newEvolution = Evolution({
            PokemonId : data[i].PokemonId,
            Evolution : data[i].Evolution,
            Candy : data[i].Candy
        });
        newEvolution.save(function(err){
            if(err) throw err;
            console.log('PokemonId : ' + i + 'Create');
        });

    }
});

fs.createReadStream('../pokemon/evolution.csv').pipe(converter);
