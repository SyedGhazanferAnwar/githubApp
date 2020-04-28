import * as actionTypes from "../actions/actionTypes"

initialState = {
    fetching: false,
    usersData: [],
    error: "",
    userDetail: {},
    searchTerm:""

}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.FETCHING_USERS_SUCCESS:
            return { ...state, fetching: false, usersData: action.payload }

        case actionTypes.FETCHING_USERS_SUCCESS:
            return { ...state, fetching: false, error: action.payload }

        case actionTypes.FETCHING_USERS_INITIATE:
            return { ...state, fetching: true }

        case actionTypes.FETCHING_USER_DETAIL:
            return { ...state, userDetail: action.payload }
        
        case actionTypes.SETTING_SEARCH_QUERY:
            return  {...state,searchTerm:action.payload}
        default:
            return state

    }

}

export default usersReducer