import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';
import { getPost, getPostsBySearch } from '../../actions/posts';
import CommentSection from './CommentSection';

import useStyles from './styles';

// rafce react arrow function export component
const PostDetails = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    useEffect(() => {
        if(post){
            dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
        }
    }, [post]);

    if(!post) return null;

    if(isLoading){
        return <Paper elevation={6} className={classes.loadingRecipe}>
            <CircularProgress size="7em" />
        </Paper>
    }

    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    const openPost = (_id) => history.push(`/posts/${_id}`);

    return(
        <Paper className={classes.mainPaper} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2">{post.title}</Typography>
                    <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>{post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography variant="body1" component="p" gutterBottom>{post.ingredients}</Typography>
                    <Typography variant="body1" component="p" gutterBottom>{post.directions}</Typography>
                    <Typography variant="h6">Shared by: {post.name}</Typography>
                    <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <CommentSection post={post}/>
                    <Divider style={{ margin: '20px 0' }} />
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.picture} src={post.selectedFile} />
                </div>
            </div>
            {/* {recommendedPosts.length && (
                <div className={classes.section}>
                    <Typography variant="h5" gutterBottom>You might also like:</Typography>
                    <Divider />
                    <div className={classes.recommendedPosts}>
                        {recommendedPosts.map(({ title, recipe, name, likes, selectedFile, _id }) => (
                            <div style={{ margin: '20px', cursor: 'pointer'}} onClick={() => openPost(_id)} key={_id} >
                                <Typography variant="h6" gutterBottom>{title}</Typography>
                            </div>
                        ))}
                    </div>
                </div>
            )} */}
        </Paper>
    )
};

export default PostDetails;