const mongoose = require('mongoose')

const connect_database = async () => {
    try {
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/graphql_tutorial', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`Database connected successfully to ${connection.connection.name}`)
    } catch (error) {
        throw error
    }
}

module.exports = connect_database;