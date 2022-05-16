import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 10,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
      },
      brandContainer: {
        display: 'flex-end',
      },
      image: {
        marginLeft: '15px',
      },
      heading: {
        alignItems: 'center',
        textDecoration: 'none',
        color: 'rgba(94,0,53,1)',
      },
      button: {
        backgroundColor: 'rgba(149,9,82,1)',
        '&:hover': {
            backgroundColor: 'rgba(94,0,53,1)',},
        color: 'white',
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
          fontSize: '29px',
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