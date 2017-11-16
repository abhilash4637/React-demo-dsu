import * as types from '../constants';

export const initialState = {
    userType: 'individual',

    formValidationSSN :{
        'error' : 'false',
        'text' : 'Please enter a valid social security number',
        'value' : '',
        'id':'SSNInput'

    },
    formValidationLast :{
        'error' : 'false',
        'text' : 'Please enter your last name',
        'value' : '',
        'id':'LastNameInput'

    },
    formValidationDOB :{
        'error' : 'false',
        'text' : 'Please enter a valid birth date',
        'value' : '',
        'id':'DOBInput'

    }
};

export default (state = initialState, action) => {
    console.log(action,'4::::::::::::::action:::::::::');
    switch (action.type) {
        case types.SWITCH_USER:
            return {
                ...state,
                userType: action.userType
            }
        case types.INPUT_CHANGE:
            console.log('39', action)
            return {
                ...state,
                formValidationSSN: action.formValidationSSN,
                formValidationLast: action.formValidationLast,
                formValidationDOB: action.formValidationDOB,
                userType:  action.userType
            }

        default:
            return state
    }
}
