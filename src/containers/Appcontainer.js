import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ForgotUserName from '../components/forgot-username.component';
import { onChangeUserType,onChangeInputType } from '../actions/modalActions'

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       // const { userType, addTeams } = this.props;
        console.log('::::::::::::::::::::props::::::::::::::::',this.props);
        return (
            <div className="App">
                <ForgotUserName {...this.props}  />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('31:::::::::::::::::::::::', state);
    return {
        userType: state.modal.userType,
        formValidationSSN: state.modal.formValidationSSN,
        formValidationLast: state.modal.formValidationLast,
        formValidationDOB: state.modal.formValidationDOB
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({

        onChangeUserType: onChangeUserType,
        onChangeInputType: onChangeInputType,

}, dispatch);


export default connect(
    mapStateToProps,mapDispatchToProps
)(AppContainer)



