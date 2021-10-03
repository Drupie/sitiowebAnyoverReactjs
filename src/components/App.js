import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Nav from "./Nav";
import Slider from "./Slider";
import "../css/styles.css";
import Card from "./Card";
import Form from "./Form";
function App(){
return (
  <BrowserRouter>
  <Switch>
      <>

        <Nav/>
        <Slider/>
   
    <Card/>
    <Form/>
      </>
  </Switch>
  </BrowserRouter>
)
}
export default App;