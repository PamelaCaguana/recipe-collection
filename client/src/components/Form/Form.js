import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ title:'', ingredients:'', directions:'',  tags:'', recipeOrigin: '', selectedFile:''});
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId ) : null );
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            
        }else{
            dispatch(createPost({ ...postData, name: user?.result?.name }, history));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ title:'', ingredients:'', directions:'',  tags:'', recipeOrigin: '', selectedFile:'' });
    };

    if(!user?.result?.name){
        return(
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please sign in to share your recipes.
                </Typography>
            </Paper>
        )
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit' : 'Add'} A Recipe</Typography>
                <TextField name="title" variant="outlined" label="Recipe Name" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})}/>
                <TextField name="ingredients" variant="outlined" label="Ingredients" fullWidth value={postData.ingredients} onChange={(e) => setPostData({ ...postData, ingredients: e.target.value})}/>
                <TextField name="directions" variant="outlined" label="Directions" fullWidth multiline minRows={3} value={postData.directions} onChange={(e) => setPostData({ ...postData, directions: e.target.value})}/>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})}/>
                <TextField name="recipeOrigin" variant="outlined" label="Recipe Origin" fullWidth value={postData.recipeOrigin} onChange={(e) => setPostData({ ...postData, recipeOrigin: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;