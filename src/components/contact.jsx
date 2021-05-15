import React from 'react';
import Field from './field';
function Contact() {

    return (
        <div className="contact" id="myContact">
            <h1 className="text-center mt-2">Contact Us</h1>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="contact-d">
                        <p>Phone &nbsp;<i className="fa fa-phone" aria-hidden="true"></i></p>
                        <p>+92311-4598019</p>
                        <p>email &nbsp;<i className="fa fa-envelope" aria-hidden="true"></i></p>
                        <p>zubairafzal621@gmail.com</p>
                        <p>Adress &nbsp;<i className="fa fa-map-marker-alt" aria-hidden="true"></i></p>
                        <p>Phool Mandi, Nain Sukh Chowk, Tehsil Ferozwala, District Sheikhupura</p>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="contact-f container">
                        <form className="form-group">
                            <Field fLabel="exampleInputText1" text="First Name" c="form-control" fId="exampleInputText1" fContent="text" />
                            <Field fLabel="exampleInputText1" text="Last Name" c="form-control" fId="exampleInputText1" fContent="text" />
                            <Field fLabel="exampleInputEmail1" text="Email" c="form-control" fId="exampleInputEmail1" fContent="email" />
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <button className="btn btn-outline-success btn-block mt-2" type="button">Send &nbsp;<i className="fa fa-paper-plane" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Contact;