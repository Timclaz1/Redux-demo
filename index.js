const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const Cake_Ordered = 'Cake_Ordered';
const Cake_Restocked = 'Cake_Restocked';
const IceCream_Ordered = 'IceCream_Ordered';
const IceCream_Restocked = 'IceCream_Restocked';


function orderCake(){
return{
    type : Cake_Ordered,
    payload : 1,
}
}

function restockCake(qty = 1) {
    return{
        type : Cake_Restocked,
        payload : qty,
    
    }
}

function orderIceCream(){
    return{
        type : IceCream_Ordered,
        payload : 1,
    }
}

function restockIceCream(qty = 1) {
    return {
        type : IceCream_Restocked,
        payload : qty,                          
    }
}

// const initialState = {
//     numOfCakes : 10,
//     numOfIceCreams : 20,
// }

// creating a state for cakes and ice creams
const initialCakeState = {
    numOfCakes : 10,
}
const initialIceCreamState = {
    numOfIceCreams : 20,
}


// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case Cake_Ordered:
//             return {
//                 ...state,
//                 numOfCakes : state.numOfCakes - 1
//             }
//             case Cake_Restocked:
//                 return {
//                     ...state,
//                     numOfCakes : state.numOfCakes + action.payload
//                 }
//                 case IceCream_Ordered:
//                     return {
//                         ...state,
//                         numOfIceCreams : state.numOfIceCreams - 1
//                     }
//                     case IceCream_Restocked:
//                         return {
//                             ...state,
//                             numOfIceCreams : state.numOfIceCreams + action.payload
//                         }
//         default:
//             return state;
//     }
// }

// Creating a separate reducer for cakes and ice creams

// Reducer for Cakes
const CakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case Cake_Ordered :
            return {
                ...state,
                numOfCakes : state.numOfCakes - 1
            }
            case Cake_Restocked :
                return {
                    ...state,
                    numOfCakes : state.numOfCakes + action.payload
                }
                default:
                    return state ;
    }

}

// Reducer for Ice Creams

const IceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case IceCream_Ordered :
            return {
                ...state,
                numOfIceCreams : state.numOfIceCreams - 1
            }
            case IceCream_Restocked :
                return {
                    ...state,
                    numOfIceCreams : state.numOfIceCreams + action.payload
                }
                default:
                    return state ;
    }

}


const rootReducer = combineReducers({
    cake : CakeReducer,
    icecream : IceCreamReducer, 
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(4))
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());    
store.dispatch(restockIceCream(2))

unsubscribe();
