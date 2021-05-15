import React from "react";

const Services = () => {

    return (
        <div id="services" className="container pt-5 text-center">
            <h1 className="text-center mb-4">Services</h1>
            <div className="row">
                <div className="s-card col-lg-4 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
                    <i className="icon fas fa-desktop fa-5x fg pl-2"></i>
                    <h3 className="pt-3 text-uppercase">I build Front End Websites using html,Css, javascript, bootstraps, Reactjs</h3>
                </div>
                <div className="s-card col-lg-4 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
                    <i className="icon fas fa-mobile-alt fa-5x fg"></i>
                    <h3 className="pt-3 text-uppercase">I build Mobile application using flutter,firebase,sqflite as a backend technologies</h3>

                </div>
                <div className="s-card col-lg-4 col-sm-12 shadow-lg p-3 mb-5 bg-white rounded">
                    <i className="icon fas fa-globe-asia fa-5x fg"></i>
                    <h3 className="pt-3 text-uppercase">Guaranteed to work. Way to Excellence</h3>
                </div>
            </div>
        </div>
    );

}

export default Services;