import React, { Component } from 'react';

export const Individual = (props) => {
    const { formValidationSSN,formValidationLast,formValidationDOB,onChangeInputType } = props;


    //  function renderContent(propertyName,event) {
    //     if(event.target.value){
    //         propertyName.value =  event.target.value;
    //         propertyName.error =  'false';
    //
    //     }else {
    //         propertyName.error = 'true';
    //         propertyName.value = event.target.value;
    //     }
    //     return propertyName
    // }

    console.log(formValidationSSN,'::::::::::::formValidation::::::::::::::::::::::::::::');
        return (
            <div>
                <div id="forgot-username" className="container">
                    <div className="section form">
                            <section className="form-section divided-section">
                                <div className="form-errors">ttttt{formValidationSSN['value']}
                                    {formValidationSSN.error == 'true' ?  <label id="ssnInput-error" className="tooltip-text form-error" htmlFor={formValidationSSN.id}>{formValidationSSN.text}</label> : null}

                                    {/*<label id="lastNameInput-error" class="tooltip-text form-error" htmlFor="lastNameInput">Please enter your last name</label>*/}
                                    {/*<label id="dobInput-error" class="tooltip-text form-error" htmlFor="dobInput">Please enter a valid birth date</label>*/}
                                </div>
                                <div id="individual" className="show">
                                    <div className="form-group ssn-group reveal  has-error has-feedback">
                                        <label className="form-label" htmlFor="ssnInput">SSN</label>
                                        <input className="form-control ssn-control" type="password"
                                               name="ssnInput" onChange={(e) => onChangeInputType(e)}
                                               defaultValue={formValidationSSN.value} />
                                        <span className="toggle-ssn">
                                           <a className="" href="#" title="Click to reveal your social security number">Show</a>
                                        </span>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="lastNameInput">Last name</label>
                                        <input className="form-control" defaultValue={formValidationLast.value} type="text" name="LastNameInput"  onChange={(e) => onChangeInputType(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="dobInput">Date of birth</label>
                                        <input className="form-control birth-date-control" type="date" defaultValue={formValidationDOB.value} id="dobInput" name="DOBInput" onChange={(e) => onChangeInputType(e)}/>
                                    </div>
                                    <div id="btn-container" className="btn-container">
                                        <div className="form-group buttons">
                                            <input className="btn grey cancel" type="submit" value="Cancel" name="ActionName"/>
                                            <input className="btn" type="submit" value="Submit" name="ActionName"/>
                                        </div>
                                        <div className="link-container">
                                            <a className="cta" href="https://www.valic.com/security-center" target="_blank" title="Stay Secure">StaySecure<i className="icon-carrot-right"></i></a>
                                        </div>
                                    </div>
                                </div>



                            </section>

                    </div>
                </div>
            </div>
        );

}
export default Individual;

