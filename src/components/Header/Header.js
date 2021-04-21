import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { localUserContext, userContext } from '../../App';
import './Header.css';
import logo from '../../images/logo.png';
import { handleSignOut } from '../LogIn/loginManager';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    // let email = loggedInUser.email;
    if (loggedInUser.email) {
        var name = loggedInUser.email.substring(0, loggedInUser.email.indexOf("@"));
    }
    if (loggedInUser.name){
        var name = loggedInUser.name.substring(0, loggedInUser.name.indexOf(" "));
    }
    if (loggedInUser.displayName){
        var name = loggedInUser.displayName.substring(0, loggedInUser.displayName.indexOf(" "));
    }
    const signOut = () => {
        handleSignOut()
        .then(res => {
            setLoggedInUser(res);
            
        })
    }

    return (
        <div className="menu-area">
            <nav className="navbar navbar-expand-lg navbar-light nav-spacing">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img className="navimg" src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/home" className="nav-link active nav-a" aria-current="page">Home</Link>
                            <Link className="nav-link nav-a" >Destination</Link>
                            <Link className="nav-link nav-a" >Blog</Link>
                            <Link className="nav-link nav-a" >Contact</Link>
                            {
                                (loggedInUser.isSignedIn) ? <p className="nav-link nav-a" >{name}</p>  : <Link to="/login"><button className="custom-btn">Log In</button></Link>
                            }
                            {
                                loggedInUser.isSignedIn && <button className="custom-btn" onClick={signOut}>Log Out</button>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;