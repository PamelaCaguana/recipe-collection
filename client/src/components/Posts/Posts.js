import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    // [] array of posts has become { posts: []} by destructuring it
    // refer to reducers FETCH_ALL
    const { posts, isLoading } = useSelector((state) => state.posts);

    const classes = useStyles();

    if(!posts.length && !isLoading) return (
        <div>
            <h2 style={{'color': 'white', 'fontFamily': 'Montserrat, sans-serif'} }>No Recipes</h2>
        </div>
    );

    return(
        isLoading ? <CircularProgress style={{'color': 'rgba(149,9,82,1)'}} /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={2}>
                {posts.map((post) => 
                <Grid key={post._id} item xs={12} sm={12} md={6} lg={4} >
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
                )}
            </Grid>
        )
    )
}

export default Posts;