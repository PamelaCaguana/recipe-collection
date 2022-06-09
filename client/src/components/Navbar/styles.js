import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 35px',
        paddingBottom: '50px',
        background: 'transparent', 
      },
      brandContainer: {
        display: 'flex-end',
        textDecoration: 'none',
      },
      image: {
        marginLeft: '15px',
      },
      heading: {
        alignItems: 'center',
        textDecoration: 'none',
        fontFamily: 'Montserrat, sans-serif',
        color: 'white',
        // color: 'rgba(94,0,53,1)',
      },
      button: {
        backgroundColor: 'white',
        color: 'rgba(94,0,53,1)',
        '&:hover': {
            backgroundColor: 'rgba(94,0,53,1)',
            color: 'white',},
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
      },
      profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      },
      purple: {
        color: 'white',
        backgroundColor: 'rgba(149,9,82,1)',
      },
      [theme.breakpoints.down('sm')]: {
        appBar: {
          flexDirection: 'column',
          justifyContent: 'center',
        },
        // brandContainer:{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   paddingBottom: '10px'
        // },
        heading: {
          fontSize: '40px',
        },
        toolbar: {
          justifyContent: 'space-around',
        },
        profile: {
          width: '310px',
        },
        userName: {
          fontSize: '15px',
        },
      },
}));