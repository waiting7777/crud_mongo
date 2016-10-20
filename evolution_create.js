const fs = require('fs');
const csvtojson = require('csvtojson');
const Evolution = require('./db');

var Converter = csvtojson.Converter;
var converter = new Converter({});

var newEvolution = Evolution({});

converter.on('end_parsed', function(data){
    for(var i = 0; i < data.length; i++){

        var temp1 = data[i].Evolution.split('|').map(Number);
        if(typeof(data[i].Candy) == 'number'){
            data[i].Candy = data[i].Candy.toString();
        };
        var temp2 = data[i].Candy.split('|').map(Number);
        
        newEvolution = Evolution({
            Evolution : temp1,
            Candy : temp2
        });
        newEvolution.save(function(err){
            if(err) throw err;
            console.log('PokemonId : ' + i + 'Create');
        });

    }
});

fs.createReadStream('../pokemon/evolution.csv').pipe(converter);
