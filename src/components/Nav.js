import React from "react";
import {Link} from 'react-router-dom'
class Nav extends React.Component{

    render(){
        const {background,color}=this.props
        return(
            <nav style={{
                width:"100%",
                display:"flex",
                justifyContent:"space-around",
                background:"#1d3452",
                alignItems:"center",
                padding:"10px"
            }}>
<img src="https://anyover.com.mx/LOGO-HORIZONTAL-pn.png" style={{width:"100px"}}/>
<Link to="#" style={{color:"#fafafa",textDecoration:"none"}}>Inicio</Link>
<Link to="#" style={{color:"#fafafa",textDecoration:"none"}}>Instrumentos</Link>
<Link to="#" style={{color:"#fafafa",textDecoration:"none"}}>Aplicaciones</Link>
<Link to="#" style={{color:"#fafafa",textDecoration:"none"}}>Eventos</Link>
            </nav>
        )
    }

}

export default Nav ;