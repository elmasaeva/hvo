import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import i18next from 'i18next';

i18next.init({
    lng: 'en',
    resources: {
        en: require('./i18n/en/translation.json'),
    },
});


ReactDOM.render(<App />, document.getElementById('root'));
