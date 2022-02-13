import React from 'react';
// import styles from "./About-us.module.css";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const cards = [
    {
        index: 1,
        name: 'Anthony',
        text: 'Computer engeenering student from Montréal.',
        image: 'https://i.ibb.co/dDTm1JW/IMG-5386.jpg',
        linkedin: 'https://www.linkedin.com/in/anthony-depachtere/',
    },
    {
        index: 2,
        name: 'Amitesh',
        text: 'Computer engeenering student from India.',
        image: 'https://i.ibb.co/F4T8NZN/1.jpg',
        linkedin: 'https://www.linkedin.com/in/amitesh-kumar-ak/',
    },
    {
        index: 3,
        name: 'Artour',
        text: 'Computer engeenering student from Montréal.',
        image: 'https://i.ibb.co/1b9Zfn0/20220107-174323-1.jpg',
        linkedin: 'https://www.linkedin.com/in/artour-benevolenski-a77213205/',
    },
    {
        index: 4,
        name: 'Majid',
        text: 'Computer engeenering student from Montréal.',
        image: 'https://i.ibb.co/n3w5RBp/Mozaic-Magic818-2.jpg',
        linkedin: 'https://www.linkedin.com/in/majid-ibrahim-djido-a04399140/',
    },
];

const theme = createTheme();

export default function AbboutUs() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative" style={{ background: 'green' }}>
                <Toolbar>
                    <IconButton component={Link} to="/">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        About us
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
                            Who are we?
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Four motivated students of computer engineering from Canada and India, united by the desire of discovering new
                            technologies. One of our hobbies is also to change the world around us, which we are trying to do with this web site. Many
                            women face uncertainty and difficulties, and we decided to contribute to the empowerment of women by providing a secure
                            site for everyday emergencies. Our dream is to live in a world where our site will never be used...
                        </Typography>
                    </Container>
                </Box>
                <Container maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card.index} xs={12} sm={6} md={3}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%',
                                    }}
                                >
                                    <CardMedia component="img" image={card.image} alt="random" />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.name}
                                        </Typography>
                                        <Typography>{card.text}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href={card.linkedin} target="_blank">
                                            LinkedIn
                                        </Button>
                                        <Button size="small" href="https://www.un.org/sustainabledevelopment/gender-equality/">
                                            Knowledge
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    For PolyHacks Hackatown
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                    Created in February 2022
                </Typography>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}
