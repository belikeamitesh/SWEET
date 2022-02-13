/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './Social.module.css';
//import { ServerConnector } from '../../components/ServerConnector';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

var state = {
    phoneNumber: '',
    message: '',
};

function handlePhoneNumberChange(e) {
    state.phoneNumber = e.target.value;
}

function handleMessageChange(e) {
    state.message = e.target.value;
}

// function callServer(){
//     fetch("http://localhost:3001")
//         .then(res => res.text())
//         .then(res => this.setState({response: res}));

// }
const theme = createTheme();

function Social() {
    // taken from: https://www.youtube.com/watch?v=UGSN6o29fPo
    const [showSMSInformation, setVisibleSMSInformation] = useState(false);
    // callServer();
    return (
        <div className={styles.container}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="relative" style={{ background: 'green' }}>
                    <Toolbar>
                        <IconButton component={Link} to="/">
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Social
                        </Typography>
                    </Toolbar>
                </AppBar>
                {showSMSInformation ? (
                    <div className={styles.SMSZone}>
                        {showSMSInformation ? <h2>Please write the phone number you are trying to join:</h2> : null}
                        <br />
                        {showSMSInformation ? (
                            <input
                                type="tel"
                                className={styles.inputPhone}
                                placeholder="I.E: +15141234321"
                                onChange={handlePhoneNumberChange}
                            ></input>
                        ) : null}
                        <br />
                        {showSMSInformation ? <h2>Please write your message bellow:</h2> : null}
                        <br />
                        {showSMSInformation ? (
                            <textarea
                                className={styles.inputText}
                                placeholder="Your emergency message here"
                                onChange={handleMessageChange}
                            ></textarea>
                        ) : null}
                        <br />
                        {showSMSInformation ? (
                            <button className={styles.button_send} onClick={() => sendMessage()}>
                                Send Text Message
                            </button>
                        ) : null}
                    </div>
                ) : null}
                <div className={styles.flexContainer}>
                    {!showSMSInformation ? (
                        <button className={styles.button} onClick={() => setVisibleSMSInformation(true)}>
                            Send a Text Message
                        </button>
                    ) : null}
                    {showSMSInformation ? (
                        <button className={styles.button} onClick={() => setVisibleSMSInformation(false)}>
                            Hide Text Message Sender
                        </button>
                    ) : null}
                    <button className={styles.button}>Verify stress level</button>
                </div>
            </ThemeProvider>
        </div>
    );
}
const PHONE_LENGTH = 12; //+1(234)5678901

function sendMessage() {
    //code to connect with the nodeJs twilio server
    if (state.phoneNumber.length == PHONE_LENGTH && state.message.length > 0) {
        //inspired by https://www.youtube.com/watch?v=d0sWs2e7rf0&ab_channel=optikalefx
        let regPhone = /^\+\d{10}$/;
        if (!regPhone.test(state.phoneNumber)) {
            //Connect the app to the server
        }
    }
}

export default Social;
