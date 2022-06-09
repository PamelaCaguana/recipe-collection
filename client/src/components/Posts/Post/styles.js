import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '5px',
        height: '430px',
        position: 'relative',
    },
    overlayNameTime: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlayEditButton: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
        borderRadius: '15px',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '10px 16px',
        height: '40px',
    },
    tagsSection: {
        height: '40px'
    },
    cardAction: {
        display: 'block',
        textAlign: 'initial',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    smallIcons: {
        color: 'rgba(94,0,53,1)',
        // color: 'rgba(0,92,105,1)',
    },
    [theme.breakpoints.down('xs')]: {
        tagsSection: {
            height: '20px',
        }
    },
}));