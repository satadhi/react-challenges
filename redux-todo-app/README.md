# Understanding Redux in a nutshell

Redux is composed of the following parts:

1. State
2. Redux Store
3. Reducers
4. Actions

**State** is where information is stored. You may have seen 'state' before with this.setState(...) in React components.

**Redux Store** (usually just called store) is where the Redux keeps its state. React components can interact and retrieve the state from the redux store. This store is constructed with a reducer, initial state, and enhancers (see below).

**Reducers** are used to update the state within the store. Reducers takes in a state and an action, and returns new state. They are named this way, because Reducers 'reduce' state and actions into that single new state.

**Actions** are objects sent to reducers to update state. A function that returns an action is an action creator. When using an action creator and react-redux's connect, a React component can update the state of the Redux Store.

*Side note: Enhancers are functions that enhance the Redux store with third-party capabilities.*