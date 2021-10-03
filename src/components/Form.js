import React from "react";
import "../css/form.css"
class Form extends React.Component{

    render(){
    return(
        <>
        <form >
            <input type="text" placeholder="ingresa tu correo electrónico"/>
            <input type="text" placeholder="ingresa tu nombre"/>
            <input type="text" placeholder="ingresa tu escuela"/>
            <input type="submit" value="Enviar " />
        </form>
        </>
    )
}

}
export default Form;