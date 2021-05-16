import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'core-js/stable';
import React, { Suspense } from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './views/app/App';
import './views/app/app.scss';

ReactDOM.render(
    <Suspense fallback={null}>
        <App />
    </Suspense>,

    document.getElementById('app')
);
