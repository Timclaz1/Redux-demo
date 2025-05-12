const redux = require('redux');
const produce = require('immer').produce;
const reduxLogger = require('redux-logger');



const initialState = {
    name: 'Timclaz',
    address : {
        city : 'Lagos',
        state : '123 main strt ',
        country : 'Nigeria',
    },
}

const Street_Updated = 'Street_Updated';
const updateStreet = (street) => {
    return {
        type: Street_Updated,
        payload: street,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Street_Updated:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload,
            //     }
            // }
            return produce(state, (draft) => {
                draft.address.street = action.payload;
            })
        default:
            return state;
    }
}

const store = redux.createStore(reducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState());
})

store.dispatch(updateStreet('43 way by Ezi St'));
unsubscribe();