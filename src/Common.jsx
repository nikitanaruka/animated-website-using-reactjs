import React from "react";
import { NavLink } from "react-router-dom";

function Common(props){
    return <>
       <section id="header" className="d-flex align-items-center">
       <div className="container-fluid nav_bg">
      <div className="row">   
          <div className="col-10 mx-auto ">
             <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                     <h1>{props.name}<strong className="brand-name">Get&GO</strong></h1>
                     <h2 className="my-3">We are team of professional workers.</h2>
                     <div>
                         <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                     </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img className="img-fluid animated" src={props.imgsrc} alt="home-img"/>
                  </div>
             </div>
          </div>
      </div>

    </div>
       </section>
    </>
}

export default Common;
//d-flex justify-content-center flex-column