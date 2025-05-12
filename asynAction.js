const initialState = {
    loading: false,
    users: [],  
    error: '',
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    }
}
const fetchUsersFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}
