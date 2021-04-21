const { gql } = require('apollo-server-express')
const Post = require('./models/Post')

module.exports = gql`
    type Post {
        id: ID  
        title: String!
        description: String!
    }
 
    input PostInput {
        title: String!
        description: String!
    }

    type Query {
        hello: String
        posts: [Post]
    }

    type Mutation {
        createPost(post: PostInput): Post
        deletePost(id: ID): Post
        updatePost(id: ID, update: PostInput): Post
    }
`