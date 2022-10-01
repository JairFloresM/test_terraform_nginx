const app = require('./server');
//require('./database');


app.listen(app.get('port'), () => {
    console.log('Se ha iniciado el server en el puerto ', app.get('port'));
});