const fs = require('fs');
const csvtojson = require('csvtojson');
const QuickMove = require('./db');

var Converter = csvtojson.Converter;
var converter = new Converter({});

var newQuickMove = QuickMove({});

converter.on('end_parsed', function(data){
    for(var i = 0; i < data.length; i++){
        newQuickMove = QuickMove({
            ChargeMoveId : data[i].ChargeMoveId,
            NameTw : data[i].NameTw,
            NameEn : data[i].NameEn,
            Type : data[i].Type,
            Damage : data[i].Damage,
            Damage_STAB : data[i].Damage_STAB,
            ColdDown : data[i].ColdDown,
            DPS : data[i].DPS,
            DPS_STAB : data[i].DPS_STAB,
            EPS : data[i].EPS
        });
        newQuickMove.save(function(err){
            if(err) throw err;
            console.log('QuickMoveId : ' + i + 'Create');
        });

    }
});

fs.createReadStream('../pokemon/quick_move.csv').pipe(converter);
