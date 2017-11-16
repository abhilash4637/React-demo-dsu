import React, { Component } from 'react';

class Employer extends Component {
    render() {
        return (
            <div id="employer" className="hide">

                <div className="form-group">
                    <label className="form-label" htmlFor="employerEmailInput">Email</label>
                    <input className="form-control" type="email" id="employerEmailInput" name="EmailInput" value="" required="" title="Please enter a valid email address" aria-required="true" />
                </div>
                <div className="form-group buttons">
                    <input className="btn grey cancel" type="submit" value="Cancel" name="ActionName"/>
                    <input className="btn" type="submit" value="Submit" name="ActionName"/>
                </div>
                <div className="link-container">
                    <a className="cta" href="https://www.valic.com/security-center" target="_blank" title="Stay Secure">StaySecure<i className="icon-carrot-right"></i></a>
                </div>
            </div>

        );
    }
}
export default Employer;