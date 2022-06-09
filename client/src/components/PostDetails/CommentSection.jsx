import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from './styles'

const CommentSection = ({ post }) => {
    const classes = useStyles();

    return (
        <h1 className={classes.comments}>Comment Section</h1>
    )
};

export default CommentSection;