import * as types from '../constants';

export const onChangeUserType = (event) => {
    return (dispatch, getState) => {
        dispatch({
            type: types.SWITCH_USER,
            userType: event.target.value
        })
    }
}
function renderContent(propertyName,event) {
    if(event.target.value){
        propertyName.value =  event.target.value;
        propertyName.error =  'false';

    }else {
        propertyName.error = 'true';
        propertyName.value = event.target.value;
    }
}
export const onChangeInputType = (event) => {
    return (dispatch, getState) => {
       // console.log(':::::::::::::::',getState().modal.formValidationSSN);
        const formValidationSSNchange = getState().modal.formValidationSSN;
        const formValidationlastchange = getState().modal.formValidationLast;
        const formValidationdobchange = getState().modal.formValidationDOB;
        if(event.target.name == "ssnInput"){
            renderContent(formValidationSSNchange,event)
        }else if(event.target.name == "LastNameInput"){
            renderContent(formValidationlastchange,event)
        }else if(event.target.name == "DOBInput"){
            renderContent(formValidationdobchange,event)
        }
        dispatch({
            type: types.INPUT_CHANGE,
            formValidationSSN: formValidationSSNchange,
            formValidationLast: formValidationlastchange,
            formValidationDOB: formValidationdobchange,
            userType: 'individual'

        })
    }

}