const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/comidas', {
    useNewUrlParser: true,
    useFindAndModify: false
})
        .then(db=>console.log('DB connected'))
        .catch(e=>console.log(e))