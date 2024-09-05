const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 10,
    flavour: "Chocolate",
  };
};

function restockCake(quantity) {
  return {
    type: CAKE_RESTOCKED,
    payload: {
      quantity: quantity || 10,
      flavour: "Vanilla",
    },
  };
}

function orderIcecream(quantity) {
  return {
    type: ICECREAM_ORDERED,
    payload: {
      quantity: quantity,
      flavour: "Vanilla",
    },
  };
}

function restockIcecream(quantity) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: {
      quantity: quantity || 10,
      flavour: "Vanilla",
    },
  };
}

// (previousState, action) => newState

const cakeInitialState = {
  numberOfCakes: 10,
};

const icecreamInitialState = {
  numberOfIcecreams: 20,
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.quantity,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload.quantity,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = icecreamInitialState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - action.payload.quantity,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams + action.payload.quantity,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = createStore(rootReducer);

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);

// store.dispatch(orderCake);
// store.dispatch(orderCake);
// store.dispatch(restockCake(2));
// store.dispatch(orderCake);

actions.orderCake();
actions.orderCake();
actions.restockCake(20);
actions.orderCake();
actions.orderIcecream(0);
actions.orderIcecream(10);
actions.restockIcecream(5);

unsubscribe();
