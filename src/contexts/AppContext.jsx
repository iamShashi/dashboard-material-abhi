import React, { PureComponent } from 'react';

export const AppContext = React.createContext();

export default class AppProvider extends PureComponent {
    render() {
        const {
            appState,
            dispatchApp,
            children,
        } = this.props;

        return (
            <AppContext.Provider
                value={{
                    appState,
                    dispatchApp,
                }}
            >
                {children}
            </AppContext.Provider>
        );
    }
}
