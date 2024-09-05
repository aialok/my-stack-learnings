# Redux

### Three core concepts of Redux

- Shop (store) - a place where the state of the application is stored
- Cake Order (action) - a way to change the state of the application
- Shopkeeper (reducer) - a way to specify how the state of the application changes in response to an action

### Three principles of Redux

*First principle*: The state of the application is stored in a single object in the store.

*Second principle*: The only way to change the state is to dispatch an action, an object that describes what happened.

*Third principle*: To specify how the state changes in response to an action, you write a reducer, a function that takes the current state and the action and returns the new state.

```javascript
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
```
- Javascript(APP) -> Action -> Reducer -> Store -> Javascript(APP)


