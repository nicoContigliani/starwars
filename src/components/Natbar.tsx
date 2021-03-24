import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import Index from './Index'
import Yo from './Yo'
const Natbar = () => {
    return (
        <div>
            <Router>

                <div className="fixed">

                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bg-dark p-4">
                            <h5 className="text-white h4">Collapsed content</h5>

                            <Link to="/" className="btn btn-outline-warning">Inicio</Link>
                            <Link to="Yo" className="btn btn-outline-warning">Yo</Link>


                        </div>
                    </div>
                    <nav className="navbar navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
                <Switch>
                    <Route path="/" exact>
                        <Index />
                    </Route>
                    <Route path="Yo" exact>
                        <Yo />
                    </Route>
                </Switch>

            </Router>


        </div>
    )
}

export default Natbar
