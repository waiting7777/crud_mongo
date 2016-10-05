const fs = require('fs');
const csvtojson = require('csvtojson');
const QuickMoveRelate = require('./db');

var Converter = csvtojson.Converter;
var converter = new Converter({});

var newQuickMoveRelate = QuickMoveRelate({});

converter.on('end_parsed', function(data){
    for(var i = 0; i < data.length; i++){
        newQuickMoveRelate = QuickMoveRelate({
            PokemonId : data[i].PokemonId,
            QuickMoveId : data[i].QuickMoveId
        });
        newQuickMoveRelate.save(function(err){
            if(err) throw err;
            console.log('QuickMoveId : ' + i + 'Create');
        });

    }
});

fs.createReadStream('../pokemon/quickmove_relate.csv').pipe(converter);
