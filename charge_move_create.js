const fs = require('fs');
const csvtojson = require('csvtojson');
const ChargeMove = require('./db');

var Converter = csvtojson.Converter;
var converter = new Converter({});

var newChargeMove = ChargeMove({});

converter.on('end_parsed', function(data){
    for(var i = 0; i < data.length; i++){
        newPokemon = ChargeMove({
            ChargeMoveId : data[i].ChargeMoveId,
            NameTw : data[i].NameTw,
            NameEn : data[i].NameEn,
            Type : data[i].Type,
            Charge : data[i].Charge,
            Damage : data[i].Damage,
            Damage_STAB : data[i].Damage_STAB,
            ColdDown : data[i].ColdDown,
            DPS : data[i].DPS,
            DPS_STAB : data[i].DPS_STAB,
            Dodge : data[i].Dodge
        });
        newPokemon.save(function(err){
            if(err) throw err;
            console.log('ChargeMoveId : ' + i + 'Create');
        });

    }
});

fs.createReadStream('../pokemon/charge_move.csv').pipe(converter);
