const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const { connect_database } = require('./utils')

async function startServer() {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    connect_database();

    apolloServer.applyMiddleware({ app })

    app.use((req, res) => res.send("Hello World"))

    app.listen(process.env.PORT || 4000, () => `Server running`)
}

startServer();