import app from './app'
import { Server } from 'http';
import express = require('express')

const PORT = 5000;

let server: Server;

async function bootstrap() {
    server = app.listen(PORT, () => {
        console.log(`Example app listening on PORT ${PORT}`)
    })
}

bootstrap()

