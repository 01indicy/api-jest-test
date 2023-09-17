const request = require('supertest')
const express = require('express');
const app = require('../app');
const closeServer = () => { server.close(); };

describe('default get request', () => {
    let server;
    beforeAll(() => {
        server = app.listen(3000);
    });

    it('should return a message', async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
    });

    it('should return a json data', async () => {
        const response = await request(app).get('/get-data')
        expect(response.statusCode).toBe(200)
    });
    afterAll(() => {
        closeServer();
    });
});