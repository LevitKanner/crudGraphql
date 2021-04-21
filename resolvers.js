const Post = require('./models/Post')

module.exports = {
    Query:{
        hello: () => 'Hello World',
        posts: async () => {
            try {
                return await Post.find({})
            } catch(error) {
                throw error;
            }
        }
    },
    Mutation: {
        createPost:  async (parent, args, context, info) => {
            try { 
                return await new Post({...args.post}).save()
            }catch (err) {
                throw err;
            }
        },
        deletePost: async (parent, args, context, info) => {
            try {
                return await Post.findByIdAndDelete(args.id)
            } catch (err) {
                throw err
            }
        },
        updatePost: async (parent, { id, update }, context, info) => {
            try {
                return await Post.findByIdAndUpdate(id, update)
            } catch (err) {
                throw err
            }
    
        }
    }
}  