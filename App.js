import React, { Component } from 'react';

import MainScreen from "./screens/MainScreen"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import usersReducer from "./redux/reducers/usersReducer"
const thunkCreateStore=applyMiddleware(thunk)(createStore)
const store=thunkCreateStore(usersReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    )
  }

};

export default App;
