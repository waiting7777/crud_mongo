const fs = require('fs');
const csvtojson = require('csvtojson');
const Pokemon = require('./db');

var Converter = csvtojson.Converter;
var converter = new Converter({});

var newPokemon = Pokemon({});

converter.on('end_parsed', function(data){
    for(var i = 0; i < data.length; i++){
        newPokemon = Pokemon({
            PokemonId : data[i].PokemonId,
            NameTw : data[i].NameTw,
            NameEn : data[i].NameEn,
            Type1 : data[i].Type1,
            Type2 : data[i].Type2,
            MaxCp : data[i].MaxCp,
            BaseAtk : data[i].BaseAtk,
            BaseDef : data[i].BaseDef,
            BaseSta : data[i].BaseSta,
            CaptureRate : data[i].CaptureRate,
            FleeRate : data[i].FleeRate,
            Weight : data[i].Weight,
            Height : data[i].Height,
            Flavor : data[i].Flavor,
            Old_MaxCp : data[i].Old_MaxCp,
            Old_BaseAtk : data[i].Old_BaseAtk,
            Old_BaseDef : data[i].Old_BaseDef,
            Old_BaseSta : data[i].Old_BaseSta,
        });
        newPokemon.save(function(err){
            if(err) throw err;
            console.log('PokemonId : ' + i + 'Create');
        });

    }
});

fs.createReadStream('../pokemon/pokemon.csv').pipe(converter);
