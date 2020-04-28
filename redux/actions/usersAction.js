import * as actionTypes from "./actionTypes"


export const fetchingUsersInitiate = () => ({ type: actionTypes.FETCHING_USERS_INITIATE })

export const fetchingUsersSuccess = (usersData) => ({ type: actionTypes.FETCHING_USERS_SUCCESS, payload: usersData })

export const fetchingUsersFailure = (error) => ({ type: actionTypes.FETCHING_USERS_FAILURE, payload: error })

export const fetchingUserDetail = (userData) => ({ type: actionTypes.FETCHING_USER_DETAIL, payload: userData })

export const setSearchQuery = (userData) => ({ type: actionTypes.SETTING_SEARCH_QUERY, payload: userData })

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchingUsersInitiate())

        try {
            let fetchUsers = await fetch("https://api.github.com/users")
            let usersData = await fetchUsers.json()
            dispatch(fetchingUsersSuccess(usersData))
        }
        catch (error) {
            dispatch(fetchingUsersFailure(error))
        }
    }

}

export const fetchUserDetail = (username) => {
    return async (dispatch) => {
        console.log("00001",username)

        let fetchUsers = await fetch("https://api.github.com/users/"+username)
        let usersData = await fetchUsers.json()
        console.log("0000",usersData.name)
        dispatch(fetchingUserDetail(usersData))

    }
}