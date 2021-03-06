const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon');
var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
    PokemonId : Number,
    NameEn : String,
    NameTw : String,
    Type1 : String,
    Type2 : String,
    Old_MaxCp : Number,
    Old_BaseAtk : Number,
    Old_BaseDef : Number,
    Old_BaseSta : Number,
    CaptureRate : Number,
    FleeRate : Number,
    Weight : Number,
    Height : Number,
    Flavor : String,
    BaseAtk : Number,
    BaseDef : Number,
    BaseSta : Number,
    MaxCp : Number
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
    Evolution : Array,
    Candy : Array
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

var TypeSchema = new Schema({
    Type : String,
    Relate : Array
});

var CpmSchema = new Schema({
    Level : Number,
    Cpm : Number,
    Stardust : Number
});


var Pokemon = mongoose.model('Pokemon', PokemonSchema);
var ChargeMove = mongoose.model('ChargeMove', ChargeMoveSchema);
var ChargeMoveRelate = mongoose.model('ChargeMoveRelate', ChargeMoveRelateSchema);
var Evolution = mongoose.model('Evolution', EvolutionSchema);
var QuickMove = mongoose.model('QuickMove', QuickMoveSchema);
var QuickMoveRelate = mongoose.model('QuickMoveRelate', QuickMoveRelateSchema);
var Type = mongoose.model('Type', TypeSchema);
var Cpm = mongoose.model('Cpm', CpmSchema);

module.exports = Pokemon;
// module.exports = ChargeMove;
// module.exports = ChargeMoveRelate;
// module.exports = Evolution;
// module.exports = QuickMove;
// module.exports = QuickMoveRelate;
// module.exports = Type;
// module.exports = Cpm;
