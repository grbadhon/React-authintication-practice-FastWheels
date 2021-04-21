import React from 'react';
import './RideInfo.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const RideInfo = (props) => {
    const { imageUrl,peopleIcon,person,type,Cost } = props.ride;
    
    return (
                    <div className="row d-flex vehicle-div">
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <img className="vehicle-image" src={imageUrl} alt='...'></img>
                            <p>{type}</p>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <img className="people-image" src={peopleIcon} alt='...'></img>
                            <p>{person}</p>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <p>${Cost}</p>
                        </div>
                    </div>
    );
};

export default RideInfo;