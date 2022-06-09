import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBarSearch: {
        borderRadius: 4,
        marginBottom: '1rem',
        display: 'flex',
        padding: '16px',
    },
    paper: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        padding: '16px',
    },
    searchButton: {
        backgroundColor: 'rgba(94,0,53,1)',
        '&:hover': {
            backgroundColor: 'rgba(149,9,82,1)',},
        color: 'white',
    },
    mainContainerGrid: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse', 
        }
    },
}));