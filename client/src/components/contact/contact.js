import React from "react";

const Contact = ({contacts}) => {
    return (
        <section className="contact two-column-inside white-box">
            <div className="contact-me">
                <h2>Contact me</h2>
                <ul>
                    <li>
                        <i className="pe-7s-mail" />
                        <div className="contact-me-right">
                            <p>{contacts.email}</p>
                            <span className="contact-me-right-desc">email</span>
                        </div>
                    </li>
                    <li>
                        <i className="pe-7s-call" />
                        <div className="contact-me-right">
                            <p>{contacts.phone}</p>
                            <span className="contact-me-right-desc">phone</span>
                        </div>
                    </li>
                    <li>
                        <i className="pe-7s-map-marker" />
                        <div className="contact-me-right">
                            <p>{contacts.street} <br />
                                {contacts.city}</p>
                            <span className="contact-me-right-desc">address</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="get-in-touch">
                <h2>Get in touch</h2>
                <p className="font-primary">Don’t be shy to ask me a question.</p>
                <form action>
                    <input className="col-xs-12 form-control" type="text" placeholder="Name" name="name" />
                    <input className="col-xs-12 form-control" type="email" placeholder="Email" name="email" />
                    <textarea className=" col-xs-12 form-control" id rows={6} placeholder="Question" name="question" defaultValue={""} />
                    <button type="submit" className="btn"><i className="pe-7s-paper-plane" /> Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
