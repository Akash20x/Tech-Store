import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        flexGrow: 1,
        paddingTop: '20px',
    },
    rootCon: {
        padding: '30px',
        marginTop:'50px',
    },
    paper: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 900,
        textAlign: 'center',
        transition: 'all 300ms ease-in-out',
    },
    image: {
        width: 300,
        height: 300,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    
    cardContent: {
        display: 'flex',
        justifyContent: 'center',
    },
    CardActions: {
        justifyContent: 'space-around',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
    Button: {
        display: 'flex',
        marginBottom: '25%',
        width: '100%',
    },
    text: {
        color: 'primary',
        fontSize: '3rem',
        display: 'inline-block',
        position: 'relative',
        zIndex: 0,
        '&::after': {
            content: '" "',
            position: 'absolute',
            left: '50%',
            bottom: '-20%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#f50057',
            width: '50%',
            height: '0.4rem',
            zIndex: 1,
        },
    },
}));
