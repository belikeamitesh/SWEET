import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './CardI';
import places from '../static/places';
import useWindowPosition from '../hooks/useWindowPosition';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
}));
export default function Place2() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="place-to-visit">
            <Link to="/social">
                <ImageCard place={places[2]} checked={checked} />
            </Link>
        </div>
    );
}
