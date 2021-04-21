import React from 'react';
import { Link } from 'react-router-dom';
import './Ride.css';

const Ride = ({ ride }) => {
    return (

        <div className="col-sm-12 col-md-5 col-lg-3 d-flex align-items-center justify-content-center">
            <Link to={`/destination/${ride.rideTitle}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>

                <div className="card  m-2">
                    <img src={ride.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">{ride.rideTitle}</h5>
                    </div>
                </div>

            </Link>

        </div>



    );
};

export default Ride;