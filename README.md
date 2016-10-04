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
