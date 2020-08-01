import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ListItem, ListItemText, ListSubheader } from '@material-ui/core';



const useStyles = makeStyles((theme) =>({
    root: {
        padding: theme.spacing(2),
        width: 275
    },
    button: {
        width: '100%'
    }
}));

const  tags = [
    {id: 1, name: 'samuel'},
    {id: 2, name: 'React'},
]

function NavBar(){
    const classes = useStyles();
    return(
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar Gratis</Button>
            <ListSubheader>{`Tags em alta`}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense buttom key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais tags
            </ListItem>
        </Paper>
    )
}
export default NavBar;
