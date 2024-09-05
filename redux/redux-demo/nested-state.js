const { createStore } = require('redux');
const produce = require('immer').produce;

const InitialState = {
    name: 'Alok',
    age: 21,
    address: {
        street: '123 Main St',
        town: 'Khadda',
        city: 'Kushinagar',
    }
};

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = (street)=>{
    return {
        type: STREET_UPDATED,
        payload: street,
    }
}

const reducer = (state = InitialState, action)=>{
    switch(action.type){
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload,
            //     }
            // };
        return produce(state, (draftState)=>{
            draftState.address.street = action.payload;
        })
        default:
            return state;
    }
};

const store = createStore(reducer);

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(()=>{console.log('Updated State', store.getState())});

store.dispatch(updateStreet('456 Main St'));
store.dispatch(updateStreet('789 Main St'));

unsubscribe();