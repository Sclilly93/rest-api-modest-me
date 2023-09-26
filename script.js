const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/clothing_store', { useNewUrlParser: true, useUnifiedTopology: true });


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

