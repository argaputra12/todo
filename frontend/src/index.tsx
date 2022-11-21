import React from 'react';
import ReactDOM from 'react-dom';
import webFontLoader from 'webfontloader';

import 'assets/styles/main.css';
import App from './App';

webFontLoader.load({
  google: {
    families: ['Raleway:300,400,500,700:latin', 'Monsterrat:300,400,500,700:latin'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
