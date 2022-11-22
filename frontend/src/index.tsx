import React from 'react';
import ReactDOM from 'react-dom';
import webFontLoader from 'webfontloader';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

import 'assets/styles/main.css';
import App from './App';

webFontLoader.load({
  google: {
    families: ['Raleway:300,400,500,700:latin', 'Monsterrat:300,400,500,700:latin'],
  },
});

ReactDOM.render(
  <>
    <ReactQueryCacheProvider queryCache={new QueryCache()}>
      <App />
    </ReactQueryCacheProvider>
  </>
  , document.getElementById('root')
);
