import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import LogIn from './components/LogIn/LogIn';
import Destination from './components/Destination/Destination';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();


function App() {

    const [loggedInUser, setLoggedInUser] = useState({});


    return (
        <div className="main-div">


            <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>

                    <Header></Header>
                    <Switch>

                        <Route path="/home">
                            <Home></Home>
                        </Route>


                        <Route exact path="/">
                            <Home></Home>
                        </Route>

                        <Route path="/login">
                            <LogIn></LogIn>
                        </Route>

                        <PrivateRoute path="/destination/:rideTitle">
                            <Destination></Destination>
                        </PrivateRoute>

                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>

                    </Switch>

                </Router>
            </userContext.Provider>
        </div>
    );
}

export default App;
