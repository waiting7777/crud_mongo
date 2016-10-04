const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemon');
var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
    PokemonId : String,
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
    Height : Number
});

var Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;
