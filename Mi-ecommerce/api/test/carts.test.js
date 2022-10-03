const request = require('supertest');
const {app, server} = require('../../server');
const {generateJWT} = require('../../helpers/generateJWT');
const db = require('../database/models');

afterEach(() =>{
    server.close();
}) 

describe('Get /cart/:id', () => {

    test('Devolver el carrito de un usuario en especifico con rol de admin', async () =>{
        const token = await generateJWT({role: 'admin'});
        const {body} =  await request(app).get('/carts/1').auth(token, {type: 'bearer'});

        

        expect(body).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number)
           })
        ]
            
        ))
    })

})