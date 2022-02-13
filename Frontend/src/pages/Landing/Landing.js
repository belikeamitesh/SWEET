import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../../components/Header';
import PlaceToVisit from '../../components/Places';
import PlaceToVisit2 from '../../components/Place2';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg3.jpeg'})`,
        backgroundColor: 'black',
    },
}));

export default function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <PlaceToVisit />
            <PlaceToVisit2 />
        </div>
    )
}
