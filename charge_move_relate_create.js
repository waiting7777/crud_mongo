const fs = require('fs');
const csvtojson = require('csvtojson');
const ChargeMoveRelate = require('./db');

var Converter = csvtojson.Converter;
var converter = new Converter({});

var newChargeMoveRelate = ChargeMoveRelate({});

converter.on('end_parsed', function(data){
    for(var i = 0; i < data.length; i++){
        newChargeMoveRelate = ChargeMoveRelate({
            PokemonId : data[i].PokemonId,
            ChargeMoveId : data[i].ChargeMoveId
        });
        newChargeMoveRelate.save(function(err){
            if(err) throw err;
            console.log('ChargeMoveId : ' + i + 'Create');
        });

    }
});

fs.createReadStream('../pokemon/chargemove_relate.csv').pipe(converter);
