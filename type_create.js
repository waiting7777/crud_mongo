const fs = require('fs');
const csvtojson = require('csvtojson');
const Type = require('./db');

var Converter = csvtojson.Converter;
var converter = new Converter({});

var newType = Type({});

converter.on('end_parsed', function(data){
    for(var i = 0; i < data.length; i++){

        var temp1 = data[i].Relate.split('|').map(Number);

        newType = Type({
            Type : data[i].Type,
            Relate : temp1
        });
        newType.save(function(err){
            if(err) throw err;
            console.log('Type : ' + i + 'Create');
        });

    }
});

fs.createReadStream('../pokemon/type.csv').pipe(converter);
