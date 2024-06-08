import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Welcome to BikeWatch</h1>
            <p>Revolutionizing bike security with cutting-edge technology</p>
            <Button variant="contained" color="primary" component={Link} to="/about">
                Learn More
            </Button>
        </div>
    );
};

export default HomePage;
