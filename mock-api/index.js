const express = require("express");
const axios = require("axios");
const helpers = require('./helpers');

const cors = require("cors");

const app = express();
app.use(cors());
const { response } = require("express");

const SERVER_PORT = 8084;

const AUTHOR_NAME = 'Alejandro';
const AUTHOR_LASTNAME = 'Polania G.';

app.get("/api/items", async (req,res) => {
    const query = req.query.q;

    if(!query) {
        console.log('NO DATA SENT');
        res.status(200);
        res.json({response: 'NO Data sent'});
    }else {

        console.log('The Query: ', query);
        const {data} = await axios.get('https://api.mercadolibre.com/sites/MLA/search', {params: { q:query}});
       

        /* console.log(data.results.slice(0, 4)); */

        console.log('full object',data.results[0].prices);

        const itemsSample = data.results.slice(0, 4);
        const categoryFilters = data.filters.find(filter => filter.id === 'category');

        

        const response = {
            author: {
                name: AUTHOR_NAME,
                lastname: AUTHOR_LASTNAME
            },
            categories: helpers.getCategories(categoryFilters),
            items: helpers.getItems(itemsSample)
        }

        res.status(200);
        res.json(response);
    }
});

app.get('/api/items/:id', async (req, res) => {

    const { id } = req.params;
    console.log('The ID:', id);

    // Revisar llamado consecutivo a dos promesas
    const { data: mainData } = await axios.get(`https://api.mercadolibre.com/items/${id}` );
    const { data: description } = await axios.get(`https://api.mercadolibre.com/items/${id}/description` );


    let response = {
        author: {
            name: AUTHOR_NAME,
            lastname: AUTHOR_LASTNAME
        },
        item: helpers.getItemDetails(mainData, description)
    }


    res.status(200);
    res.json(response);


});


app.listen(SERVER_PORT);
console.log(`SERVER LISTENING ON PORT ${SERVER_PORT}`);