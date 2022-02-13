import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
// import Button from '@material-ui/core/Button'
// import styles from "./Header.module.css";
// import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        //background: '#ffcfd6',
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '100%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: '#4caf50',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
    },
    addOn: {
        color: '#4caf50',
    },
}));
export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        <span className={classes.colorText}>SWEE</span>
                        <p>U</p>
                        <p className={classes.addOn}>P</p>
                        <p>P</p>
                        <p className={classes.addOn}>O</p>
                        <p>R</p>
                        <p className={classes.addOn}>T</p>
                    </h1>
                    {/* <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton> */}
                </Toolbar>
                {/* <Button>Login</Button> */}
            </AppBar>

            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br />
                        <span className={classes.colorText}>SWEE</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
            <span>W</span>
        </div>
    );
}
