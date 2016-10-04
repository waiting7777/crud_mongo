# Mongoose Install and CRUD test

Mongoose 安裝及 CRUD 測試

## Install 安裝
    $ npm install mongoose

## Schema

```js
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
```
## Create

```js
newPokemon = Pokemon({
    PokemonId : data[i].PokemonId,
    NameTw : data[i].NameTw,
    NameEn : data[i].NameEn,
    Type : data[i].Type,
    MaxCp : data[i].MaxCp,
    BaseAtk : data[i].BaseAtk,
    BaseDef : data[i].BaseDef,
    BaseSta : data[i].BaseSta,
    CaptureRate : data[i].CaptureRate,
    FleeRate : data[i].FleeRate,
    Weight : data[i].Weight,
    Height : data[i].Height
});
newUser.save(function(err){
    if(err) throw err;
    console.log('PokemonId : ' + i + 'Create');
});
```

## Read

```js
Pokemon.find({}, function(err, pokemons){
    if(err) throw err;

    console.log(pokemons);
});
```
