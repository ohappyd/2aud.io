import fastify from 'fastify'
import * as process from "process";

const server = fastify({
    logger:true
})

server.get('/ping', async (request, reply) => {
    return reply.send({
        'ping':'pong'
    })
})

const API_PORT = Number(process.env.API_PORT)



server.listen({ port:API_PORT, host:'0.0.0.0'}, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at yes ${API_PORT}`)
})

