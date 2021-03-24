import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { Fragment } from 'react';
import Natbar from './components/Natbar'
function App() {
  return (

    <Fragment>


<hr/>

<div className="container">

      <h1>Star Wars </h1><br/>
</div>
      <Natbar />





    </Fragment>


  );
}

export default App;
