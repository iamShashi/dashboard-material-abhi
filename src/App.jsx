import React, { useReducer } from 'react';
import appReducer, { initialAppState } from './store/reducers/app';
import AppProvider from './contexts/AppContext';
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
    const [appState, dispatchApp] = useReducer(appReducer, initialAppState);

    LoginHandler({ appState, dispatchApp });

    return (
        <AppProvider appState={appState} dispatchApp={dispatchApp}>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/rtl" component={RTL} />
                <Route path="/login" component={Login} />
                <Redirect from="/" to="/login" />
            </Switch>
        </AppProvider>
    );
};

export default App;
