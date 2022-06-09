import express from 'express';
import { createPost, getPosts, getPost, updatePost, deletePost, likePost, getPostsBySearch } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

//add auth from middleware before specific actions
//to allow anyone to see all posts so auth not necessary for GET/
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.patch('/:id/likePost', auth, likePost);
router.delete('/:id', auth, deletePost);

export default router;