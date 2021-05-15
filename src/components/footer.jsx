import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="main-footer bg-dark">
            <div className="social pt-4">
                <a href="https://www.facebook.com/zubair.afzal.355744/" target="blank">
                    <i className="fab fa-facebook fa-2x pl-3"></i>
                </a>
                <a href="https://twitter.com/zubairafzal007" target="blank">
                    <i className="fab fa-twitter fa-2x pl-3"></i>
                </a>
                <a href="https://github.com/ZubairAfzalMughal" target="blank">
                    <i className="fab fa-github fa-2x pl-3"></i>
                </a>
                <a href="https://www.linkedin.com/in/zubair-afzal-0a5397191/" target="blank">
                    <i className="fab fa-linkedin fa-2x pl-3"></i>
                </a>
               
            </div>
            <div className="footer-b">
                <p className="text-center">
                  All rights are reserved &copy; {currentYear}
                </p>
            </div>
        </div>
    );
}
export default Footer;