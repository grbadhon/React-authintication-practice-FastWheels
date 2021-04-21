import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Map from '../Map/Map';
import SearchForm from '../SearchForm/SearchForm';
import BikeData from '../../FakeData/BikeData.js';
import CarData from '../../FakeData/CarData';
import BusData from '../../FakeData/BusData';
import TrainData from '../../FakeData/TrainData';


const Destination = () => {
    const {rideTitle} = useParams();
    const [rides , setRides] = useState([]);
    useEffect(() =>{
        if(rideTitle === 'BIKE'){
            setRides(BikeData);
        }
        if(rideTitle === 'CAR'){
            setRides(CarData);
        }
        if(rideTitle === 'BUS'){
            setRides(BusData);
        }
        if(rideTitle === 'TRAIN'){
            setRides(TrainData);
        }
    },[rideTitle])
    return (
        
       <div className="row">
           <div className="col-md-5 col-lg-3 col-sm-12 left-column">
                <SearchForm rideTitle={rideTitle} rides={rides}></SearchForm>
                
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 d-flex align-items-center justify-content-center ml-2 mr-2">
                <Map></Map>
            </div>
        </div>
    );
};

export default Destination;