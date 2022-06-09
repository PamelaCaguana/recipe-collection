import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    ul: {
        justifyContent: 'space-around',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        padding: '8px',
    },
    numbers: {
        backgroundColor: 'rgba(94,0,53,1)',
        '&:hover': {
            backgroundColor: 'rgba(149,9,82,1)',},
        color: 'white'
    }
}));