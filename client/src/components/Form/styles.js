import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
        backgroundColor: 'rgba(94,0,53,1)',
        '&:hover': {
            backgroundColor: 'rgba(149,9,82,1)',},
        color: 'white',
    },
    hoverButtonSubmit: {
        backgroundColor: 'rgba(94,0,53,0.75)',
    },
}));