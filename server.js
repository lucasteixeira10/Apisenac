const express = require('express');

const api = express();

 
api.get('apisenac', (request, response) => {

    response.send('Bora devs');

});


api.listen(3001, () => console.log('bom dia'));