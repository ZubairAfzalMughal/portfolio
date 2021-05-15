import React from 'react'
import colg from './colg.jpg';
import uni from './uni.jpg';
import dp from './dp.jpg';
function Slider() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide mt-3" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={colg} alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-uppercase" style={style.textColor}>Govt Islamia College Civil lines Lahore</h5>
                        <p style={style.textColor}>2016-2018</p>
                        <button className="btn btn-success mb-2" type="button">College</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={uni} alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-uppercase" style={style.textColor1}>University of Engineering And technology Lahore, New Campus</h5>
                        <p style={style.textColor1}>2018-2022</p>
                        <button className="btn btn-success mb-2" type="button">University</button>

                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={dp} alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-uppercase" style={style.textColor}>UET new campus, BS Computer Science Department</h5>
                        <p style={style.textColor}>2018-2022</p>
                        <button className="btn btn-success mb-2" type="button">Department</button>
                    </div>
                </div>
            </div>
            {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a> */}
        </div>
    );
}
const style = {
    textColor: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: "25px"
    },
    textColor1: {
        color: "#000",
        fontWeight: "bold",
        fontSize: "25px"
    }
}
export default Slider;