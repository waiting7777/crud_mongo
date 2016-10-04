const Pokemon = require('./db');

Pokemon.remove({}, function(err){
    if(err) throw err;

    console.log('Pokemon Deleted!');
});
