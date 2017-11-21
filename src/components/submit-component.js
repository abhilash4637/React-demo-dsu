import React, { Component } from 'react';

class Submit extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props,':::::::::::::::::::::::::::::',this.props.match);
        return (
            <div className="container">
                <div className="show">
                    <h1> on submit</h1>

                </div>

            </div>

        );
    }
}
export default Submit;