import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import rides from '../../FakeData/rides'
import Ride from '../Ride/Ride';


const Home = () => {



    return (
        <div>
            
            <div className="container">
            <h1 className="text-center text-white mt-5">Please Select Your Ride</h1>
                <div className="row d-flex align-items-center justify-content-center mt-5">
                    {
                        rides.map(ride => <Ride key={ride.rideId} ride={ride}></Ride>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Home;