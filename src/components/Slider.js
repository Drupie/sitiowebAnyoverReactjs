import React from "react";
import reactDom from "react-dom";

class Slider extends React.Component{

render(){
    return(

        <>
<div class="container-fluid"><a href="#form">
  </a><div id="carouselExampleControls" class="carousel slide" data-ride="carousel"><a href="#form">
    <div class="carousel-inner">

        <div class="carousel-item S1 active">
            <img class="d-block w-100" src="https://anyover.com.mx/analisis-superficial-BET/images/slider4.png" alt=""/>
           </div>

      <div class="carousel-item S2">
        <img class="d-block w-100" src="https://anyover.com.mx/analisis-superficial-BET/images/SLIDERRR.png" alt=""/>
      </div>
      <div class="carousel-item S3">
        <img class="d-block w-100" src="https://anyover.com.mx/analisis-superficial-BET/images/slide3.png" alt=""/>
         </div>
    </div>
    </a><a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

      
        </>
    )
}
}
export default Slider;