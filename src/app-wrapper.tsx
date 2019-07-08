import * as React from 'react';
import { Store, Action } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { AppStore } from './redux/app-store.redux';
import { App } from './components/app';
import { AppRouter } from './components/app-router';


interface AppWrapperProps {
    store: Store<AppStore, Action<string>>;
    history: History;
}

const fabricWrapperStyle: React.CSSProperties = { height: '100vh' };

export const AppWrapper: React.FunctionComponent<AppWrapperProps> = (props) => (
    <Provider store={props.store}>
        <ConnectedRouter history={props.history}>
            <App>
                <AppRouter />
            </App>
        </ConnectedRouter>
    </Provider>
);