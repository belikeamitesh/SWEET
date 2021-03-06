import React, { useState } from 'react';
import styles from './Medical.module.css';
//import GoogleMap from '../../components/GoogleMap';
import GoogleMapHospitals from '../../components/GoogleMapHospitals';
import GoogleMapPharmacies from '../../components/GoogleMapPharmacies';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';

function Medical() {
    // taken from: https://www.youtube.com/watch?v=UGSN6o29fPo
    const [showMedicalStores, setShowMedicalStores] = useState(false);
    const [showHealthFacilities, setShowHealthFacilities] = useState(false);
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative" style={{ background: 'green' }}>
                <Toolbar>
                    <IconButton component={Link} to="/">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        Medical
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={styles.container}>
                    {showMedicalStores ? <GoogleMapPharmacies /> : null}
                    {showHealthFacilities ? <GoogleMapHospitals /> : null}
                    <div className={styles.flexContainer}>
                        {!showMedicalStores ? (
                            <button
                                className={styles.button}
                                onClick={() => {
                                    setShowMedicalStores(true);
                                    setShowHealthFacilities(false);
                                }}
                            >
                                Show Stores
                            </button>
                        ) : null}
                        {showMedicalStores ? (
                            <button
                                className={styles.button}
                                onClick={() => {
                                    setShowMedicalStores(false);
                                    setShowHealthFacilities(true);
                                }}
                            >
                                Hide Stores
                            </button>
                        ) : null}
                        {!showHealthFacilities ? (
                            <button
                                className={styles.button}
                                onClick={() => {
                                    setShowHealthFacilities(true);
                                    setShowMedicalStores(false);
                                }}
                            >
                                Show Health Facilities
                            </button>
                        ) : null}
                        {showHealthFacilities ? (
                            <button
                                className={styles.button}
                                onClick={() => {
                                    setShowMedicalStores(true);
                                    setShowHealthFacilities(false);
                                }}
                            >
                                Hide Health Facilities
                            </button>
                        ) : null}
                        <Link to="/shop">
                            {' '}
                            <button className={styles.button} onClick>
                                Nearby Stores
                            </button>{' '}
                        </Link>
                        <a className={styles.button} href="https://belikeamitesh.github.io/Quick-Chat-App/">
                            Speak to a Professional
                        </a>
                    </div>
                </div>
            </main>
        </ThemeProvider>
    );
}

export default Medical;
