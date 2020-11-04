import {createServer, Model, Response} from 'miragejs';

export default function() {
    createServer({
        models: {
            country: Model,
            airport: Model,
        },

        seeds(server) {
            server.create('country', {id: '1', name: 'Polska'});
            server.create('country', {id: '2', name: 'Włochy'});
            server.create('country', {id: '3', name: 'Hiszpania'});

            server.create('airport', {id: '1', country_id: '1', name: 'Warszawa', iata: 'WAW'});
            server.create('airport', {id: '4', country_id: '1', name: 'Kraków', iata: 'KRK'});
            server.create('airport', {id: '5', country_id: '1', name: 'Gdańsk', iata: 'GDN'});
            server.create('airport', {id: '6', country_id: '1', name: 'Wrocław', iata: 'WRO'});
            server.create('airport', {id: '7', country_id: '1', name: 'Katowice', iata: 'KTW'});
            server.create('airport', {id: '2', country_id: '2', name: 'Milan Malpensa', iata: 'MPX'});
            server.create('airport', {id: '8', country_id: '2', name: 'Rome Fiumicino', iata: 'FCO'});
            server.create('airport', {id: '9', country_id: '2', name: 'Palermo', iata: 'PMO'});
            server.create('airport', {id: '10', country_id: '2', name: 'Catania', iata: 'CTA'});
            server.create('airport', {id: '11', country_id: '2', name: 'Trapani', iata: 'TPS'});
            server.create('airport', {id: '12', country_id: '2', name: 'Comiso', iata: 'CIY'});
            server.create('airport', {id: '3', country_id: '3', name: 'Barcelona', iata: 'BCN'});
            server.create('airport', {id: '13', country_id: '3', name: 'Madryt', iata: 'MAD'});
            server.create('airport', {id: '14', country_id: '3', name: 'Sevilla', iata: 'SVQ'});
            server.create('airport', {id: '15', country_id: '3', name: 'Palma de Mallorca', iata: 'PMI'});
            server.create('airport', {id: '16', country_id: '3', name: 'Menorca', iata: 'MAH'});
            server.create('airport', {id: '17', country_id: '3', name: 'Tenerife Norte', iata: 'TFN'});
        },

        routes() {
            this.get('/integration-tests/api-testing/api/countries', schema => {
                // @ts-ignore
                return schema.countries.all();
            });
            this.get('/integration-tests/api-testing/api/countries/:id/airports', (schema, request) => {
                // @ts-ignore
                return schema.airports.where({country_id: request.params.id});
            });
            this.post('/integration-tests/api-testing/api/countries/:id/airports', (schema, request) => {
                // @ts-ignore
                let attrs = {...JSON.parse(request.requestBody), country_id: request.params.id};
                // @ts-ignore
                return schema.airports.create(attrs);
                // return new Response(404, {"Content-Type" : "application/json"}, { error: `Some error message`});
            });
        },
    });
}
