const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon');
var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
    PokemonId : Number,
    NameEn : String,
    NameTw : String,
    Type : String,
    MaxCp : Number,
    BaseAtk : Number,
    BaseDef : Number,
    BaseSta : Number,
    CaptureRate : Number,
    FleeRate : Number,
    Weight : Number,
    Height : Number,
    Flavor : String
});

var ChargeMoveSchema = new Schema({
    ChargeMoveId : Number,
    NameEn : String,
    NameTw : String,
    Type : String,
    Charge : Number,
    Damage : Number,
    Damage_STAB : Number,
    ColdDown : Number,
    DPS : Number,
    DPS_STAB : Number,
    Dodge : Number
});

var ChargeMoveRelateSchema = new Schema({
    PokemonId : Number,
    ChargeMoveId : Number
});

var EvolutionSchema = new Schema({
    PokemonId : Number,
    Evolution : Number,
    Candy : Number
});

var QuickMoveSchema = new Schema({
    QuickMoveId : Number,
    NameEn : String,
    NameTw : String,
    Type : String,
    Damage : Number,
    Damage_STAB : Number,
    ColdDown : Number,
    DPS : Number,
    DPS_STAB : Number,
    EPS : Number
});

var QuickMoveRelateSchema = new Schema({
    PokemonId : Number,
    QuickMoveId : Number
});

var Pokemon = mongoose.model('Pokemon', PokemonSchema);
var ChargeMove = mongoose.model('ChargeMove', ChargeMoveSchema);
var ChargeMoveRelate = mongoose.model('ChargeMoveRelate', ChargeMoveRelateSchema);
var Evolution = mongoose.model('Evolution', EvolutionSchema);
var QuickMove = mongoose.model('QuickMove', QuickMoveSchema);
var QuickMoveRelate = mongoose.model('QuickMoveRelate', QuickMoveRelateSchema);

module.exports = Pokemon;
// module.exports = ChargeMove;
// module.exports = ChargeMoveRelate;
// module.exports = Evolution;
// module.exports = QuickMove;
// module.exports = QuickMoveRelate;
