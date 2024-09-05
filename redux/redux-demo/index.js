const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const orderCake = ()=> {
    return {
        type: CAKE_ORDERED,
        quantity: 10,
        flavour: "Chocolate"
    }
};

function restockCake(quantity){
    return {
        type: CAKE_RESTOCKED,
        payload:{
            quantity: quantity || 10,
            flavour: "Vanilla"
        }
    }
}

// (previousState, action) => newState

const initialState = {
  numberOfCakes: 10,
  flavour: "Vanilla",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.quantity,
        flavour: action.flavour,
      };
    case CAKE_RESTOCKED: return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload.quantity,
        flavour: action.payload.flavour
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

const actions = bindActionCreators({orderCake, restockCake}, store.dispatch);

// store.dispatch(orderCake);
// store.dispatch(orderCake);
// store.dispatch(restockCake(2));
// store.dispatch(orderCake);

actions.orderCake();
actions.orderCake();
actions.restockCake(2);
actions.orderCake();


unsubscribe();
 