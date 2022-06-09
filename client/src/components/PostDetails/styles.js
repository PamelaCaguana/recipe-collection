import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    card: {
        display: 'flex',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
          },
    },
    section: {
        borderRadius: '10px',
        margin: '10px',
        flex: 1,
    },
    imageSection: {
        marginLeft: '20px',
        margin: '10px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
          },
    },
    picture: {
        borderRadius: '10px',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '600px',
    },
    loadingRecipe: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '15px',
        height: '39vh',
        borderRadius: 2,
    },
    mainPaper:{
        padding: '20px',
        borderRadius: 2,
    },
    comments: {
        fontFamily: 'Arial',
        fontWeight: 500,
    }
}));