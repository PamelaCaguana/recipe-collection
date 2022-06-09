import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Link, ButtonBase } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deletePost, likePost } from '../../../actions/posts';

import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));
    const Likes = () => {
        if(post.likes.length > 0){
            return post.likes.find((like) => like === user?.result?._id) ? (
                <>
                <ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
                </>
            ) : (
                <>
                <ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                </>
            )
        }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
};

    const openPost = () => {
        history.push(`/posts/${post._id}`);
    };

    return(
        <Card className={classes.card} raised elevation={10} >
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                    <div className={classes.overlayNameTime}>
                        <Typography variant="h6">{post.name}</Typography>
                        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                    </div>
                    <div className={classes.overlayEditButton}>
                        {(user?.result?._id === post?.creator) &&
                        <Button style={{color: 'white', borderRadius: '50px'}} size="small" onClick={() => setCurrentId(post._id)}>
                            <MoreHorizIcon fontSize="medium" />
                        </Button>
                        }
                    </div>
            <ButtonBase className={classes.cardAction} onClick={openPost} component="span" name="test">
                    <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
                    <div className={classes.details}>
                        <Typography className={classes.tagsSection} variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    </div>
                <CardContent>
                    {/* <Typography variant="body2" color="textSecondary" component="p" gutterBottom>{post.directions}</Typography> */}
                    {(post.recipeOrigin) && (
                        <Link href={post.recipeOrigin}>{post.recipeOrigin}</Link>
                    )}
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button className={classes.smallIcons}size="small" disabled={!user?.result} onClick={() => dispatch(likePost(post._id)) }>
                   <Likes />
                </Button>
                {(user?.result?._id === post?.creator) &&
                <Button className={classes.smallIcons}size="small" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
                }
            </CardActions>
        </Card>
    );
}

export default Post;