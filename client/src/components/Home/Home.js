import React, { useState, useEffect } from 'react';
import { Grow, Container, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input'; 

import { getPosts, getPostsBySearch } from '../../actions/posts';
import Paginate from '../Pagination/Pagination';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import useStyles from './styles';
import App from '../../App';

// https://v5.reactrouter.com/web/example/query-parameters
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    

    // useEffect(() => {
    //     dispatch(getPosts());
    // }, [dispatch]);

    const searchPost = () => {
        if(search.trim() || tags){
            //trim to discard empty spaces
            //dispatch (redux) -> fetch search post
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);

        } else {
            history.push('/');
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
            //keycode 13 is Enter Key
        }
    };

    const handleAdd = (tag) => setTags([ ...tags, tag]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    return(
        <Grow in>
                <Container maxWidth="xl" >
                    <Grid className={classes.mainContainerGrid} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6} md={8}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AppBar className={classes.appBarSearch} position="static" color="inherit">
                                <TextField
                                fullWidth
                                name="searchItem" 
                                variant="outlined"
                                label="Seach Recipes"
                                onKeyDown={handleKeyPress}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)} />
                                <ChipInput 
                                style={{ margin: '10px 0'}}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Search Tags"
                                variant="outlined"
                                 />
                                 <Button onClick={searchPost} className={classes.searchButton} variant="contained" >Search</Button>
                            </AppBar>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                            <Paper  elevation={0} className={classes.paper}>
                                <Paginate page={page} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    );
};

export default Home;