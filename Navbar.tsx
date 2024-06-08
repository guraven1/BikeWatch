import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    BikeWatch
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/JerusalemFullData">
                    <a href="http://localhost:63342/Hackathon/Jerusalem/bike_theft_heatmap_j_200.html?_ijt=9841irk4dbvgllgj536k8sm0e6&_ij_reload=RELOAD_ON_SAVE" target="_blank" rel="noopener noreferrer">
                        Jerusalem Full Month
                    </a>
                </Button>                <Button color="inherit" component={Link} to="/JerusalemMonth">
                    <a href="http://localhost:63342/Hackathon/Jerusalem/bike_theft_heatmap_j_delta.html?_ijt=9841irk4dbvgllgj536k8sm0e6&_ij_reload=RELOAD_ON_SAVE" target="_blank" rel="noopener noreferrer">
                        Jerusalem Week
                    </a>
                </Button>
                <Button color="inherit" component={Link} to="/TelAvivFullData">
                    <a href="http://localhost:63342/Hackathon/Tel%20Aviv/bike_theft_heatmap_ta_200.html?_ijt=kmsavvsjre55bc9kb6i7lahbur&_ij_reload=RELOAD_ON_SAVE" target="_blank" rel="noopener noreferrer">
                        Tel-Aviv Month
                    </a>
                </Button>
                <Button color="inherit" component={Link} to="/TelAvivMonth">
                    <a href="http://localhost:63342/Hackathon/Tel%20Aviv/bike_theft_heatmap_ta_delta.html?_ijt=kmsavvsjre55bc9kb6i7lahbur&_ij_reload=RELOAD_ON_SAVE" target="_blank" rel="noopener noreferrer">
                        Tel-Aviv Week
                    </a>
                </Button>
                <Button color="warning" component={Link} to="/">MY VEHICLE GOT STOLEN</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
