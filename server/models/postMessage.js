import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    ingredients: String,
    directions: String,
    name: String,
    creator: String,
    tags: [String],
    recipeOrigin: String,
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;