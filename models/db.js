const mongoose = require('mongoose');
try {
    (async ()=>{
        await mongoose.connect('mongodb://localhost:27017/magazine', { useNewUrlParser: true, useUnifiedTopology: true });
        
    })();
}catch(err){
    console.log(err);
}


module.exports = mongoose;