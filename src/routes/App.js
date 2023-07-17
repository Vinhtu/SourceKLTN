import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './slick.css';
// import reducers from '../reducers';
import { routes } from './routes';
import Home from '../pages/Home';
// import NotFound from '../components/UI/NotFound';
// import { AuthRoute } from './AuthRoute';
// import Login from '../components/Pages/Login';

// function configureStore(initialState) {
//   const enhancer = compose(applyMiddleware(thunkMiddleware));
//   return createStore(null, initialState, enhancer);
// }

// const store = configureStore({});

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
                exact
                {...route}
                {...this.props}
              />
            );
          })}
          {/* <Route path="/" exact component={Home} /> */}
          {/* <Route component={NotFound} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
