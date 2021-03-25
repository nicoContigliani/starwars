import React, { useEffect, useState } from 'react';
import Personajedescription from './Personajedescription'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
const axios = require('axios');


interface Personaje {

    "name": string,
    "height": string,
    "mass": string,
    "hair_color": string,
    "skin_color": string,
    "eye_color": string,
    "birth_year": string,
    "gender": string,
    "homeworld": string,
    // "films": Array<void>,
    // "species": Array<void>,
    // "vehicles": Array<void>,
    // "starships": Array<string>,
    "created": string,
    "edited": string,
    "url": string

}


const Index = () => {

    const [personajes, setPersonajes] = useState<Personaje[]>([]);
    const getPersonaje = async () => {
        const res = await axios.get("https://swapi.dev/api/people/");
        // console.log(res.data.results);

        setPersonajes(res.data.results);
    }
    useEffect(() => {
        getPersonaje()
    });

    return (
        <div>
            <br />
            <div className="container">


                <div className="Starwars">
                    <h3>Personajes</h3>

                    <div className="container">
                        <Router>



                            {

                                personajes.map((Personaje,index) => (
                                    <div>
                                        <div key={index}>


                                            <button type="button" className="btn btn-outline-dark">
                                                <Link to={`/personajeDescription/${index}`} className="btn btn-dark">   
                                                 {Personaje.name}
                                                </Link>

                                            </button>

                                            {/* <div>{Personaje.height} {Personaje.mass} {Personaje.hair_color} {Personaje.eye_color}  {Personaje.birth_year} {Personaje.gender} </div> */}
                                        </div>

                                    </div>





                                ))


                            }


                            {/* <Link to="/" className="btn btn-dark"> otro </Link> */}


                            <Switch>
                                <Route path="/personajeDescription/:id">
                                    <Personajedescription />
                                </Route>


                            </Switch>
                        </Router>







                        <br />
                    </div>



                </div>
                <br />
            </div>

        </div>
    )
}

export default Index
