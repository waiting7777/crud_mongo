const fs = require('fs');
const csvtojson = require('csvtojson');
const Cpm = require('./db');

var Converter = csvtojson.Converter;
var converter = new Converter({});

var newCpm = Cpm({});

converter.on('end_parsed', function(data){
    for(var i = 0; i < data.length; i++){
        
        newCpm = Cpm({
            Level : data[i].Level,
            Cpm : data[i].Cpm
        });
        newCpm.save(function(err){
            if(err) throw err;
            console.log('Level : ' + i + 'Create');
        });

    }
});

fs.createReadStream('../pokemon/cpm.csv').pipe(converter);
