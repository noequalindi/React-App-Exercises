const express = require('express')
const app = express();


app.get('/api/customers', (request,response) => {
    const customers = [
        { id: 1, firstName: 'Noelia', lastName: 'Qualindi'},
        { id: 2, firstName: 'Other', lastName: 'Customer'},
        { id: 3, firstName: 'Other2', lastName: 'Customer2'}
    ];
    response.json(customers)
});
const port = 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));

