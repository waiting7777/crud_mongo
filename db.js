const fs = require('fs');
const csvtojson = require('csvtojson');

var Converter = csvtojson.Converter;
var converter = new Converter({});

converter.on('end_parsed', function(jsonArray){
    console.log(jsonArray);
});

fs.createReadStream('../pokemon/pokemon.csv').pipe(converter);
