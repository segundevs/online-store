import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartContextProvider from './contexts/cartContext/CartContext';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <CartContextProvider>
      <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
      </React.StrictMode>
    </CartContextProvider>,
  document.getElementById('root')
);
