import React from "react";
import "../css/Cards.css";
import {Link} from 'react-router-dom'

class Card extends React.Component{

render(){
    return(
        <>
       <main>
       <div>
            <img src="https://anyover.com.mx/analisis-superficial-BET/images/1.png"/>
            <h1>Series 3P micro</h1>
            <p>1-3 estaciones de análisis; opciones para análisis de microporos y criptón; preparación de muestras in situ o externa</p>
            <Link to="#" style={{
                
                    background:"#1d3452",
                    textAlign:"center",
                    color:"#fafafa",
                    padding:"10px",
                    textAlign:"center",
                    width:"80%",
                    margin:"0 auto",
                    display:"block",
                    textDecoration:"none"
                
            }}>Descargar pdf</Link>        </div>
             <div>
            <img src="https://anyover.com.mx/analisis-superficial-BET/images/2.png"/>
            <h1>Series 3P micro</h1>
            <p>1-3 estaciones de análisis; opciones para análisis de microporos y criptón; preparación de muestras in situ o externa</p>
            <Link to="#" style={{
                
                    background:"#1d3452",
                    textAlign:"center",
                    color:"#fafafa",
                    padding:"10px",
                    textAlign:"center",
                    width:"80%",
                    margin:"0 auto",
                    display:"block",
                    textDecoration:"none"
                
            }}>Descargar pdf</Link>        </div>
              <div>
            <img src="https://anyover.com.mx/analisis-superficial-BET/images/3.png"/>
            <h1>Series 3P micro</h1>
            <p>1-3 estaciones de análisis; opciones para análisis de microporos y criptón; preparación de muestras in situ o externa</p>
            <Link to="#" style={{
                
                    background:"#1d3452",
                    textAlign:"center",
                    color:"#fafafa",
                    padding:"10px",
                    textAlign:"center",
                    width:"80%",
                    margin:"0 auto",
                    display:"block",
                    textDecoration:"none"
                
            }}>Descargar pdf</Link>        </div>
              <div>
            <img src="https://anyover.com.mx/analisis-superficial-BET/images/4.png"/>
            <h1>Series 3P micro</h1>
            <p>1-3 estaciones de análisis; opciones para análisis de microporos y criptón; preparación de muestras in situ o externa</p>
            <Link to="#" style={{
                
                    background:"#1d3452",
                    textAlign:"center",
                    color:"#fafafa",
                    padding:"10px",
                    textAlign:"center",
                    width:"80%",
                    margin:"0 auto",
                    display:"block",
                    textDecoration:"none"
                
            }}>Descargar pdf</Link>        </div>
       </main>
        </>
    )
}
}

export default Card;