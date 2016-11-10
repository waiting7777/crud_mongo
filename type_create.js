const fs = require('fs');
const csvtojson = require('csvtojson');
const Type = require('./db');

var Converter = csvtojson.Converter;
var converter = new Converter({});

var newType = Type({});

converter.on('end_parsed', function(data){
    for(var i = 0; i < data.length; i++){
        newType = Type({
            Type : data[i].Type,
            Bug : data[i].Bug,
            Dark : data[i].Dark,
            Dragon : data[i].Dragon,
            Electric : data[i].Electric,
            Fairy : data[i].Fairy,
            Fighting : data[i].Fighting,
            Fire : data[i].Fire,
            Flying : data[i].Flying,
            Ghost : data[i].Ghost,
            Grass : data[i].Grass,
            Ground : data[i].Ground,
            Ice : data[i].Ice,
            Normal : data[i].Normal,
            Poison : data[i].Poison,
            Psychic : data[i].Psychic,
            Rock : data[i].Rock,
            Steel : data[i].Steel,
            Water : data[i].Water
        });
        newType.save(function(err){
            if(err) throw err;
            console.log('Type : ' + i + 'Create');
        });

    }
});

fs.createReadStream('../pokemon/type.csv').pipe(converter);
