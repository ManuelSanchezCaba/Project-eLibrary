const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/authentication'));
app.use(require('./routes/book'));

//Starting the servers
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});