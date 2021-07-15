import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {QueryClientProvider, QueryClient} from 'react-query';
import DataContextProvider from './contexts/dataContext/DataContext';
import { ReactQueryDevtools } from 'react-query/devtools'
import CartContextProvider from './contexts/cartContext/CartContext';

const queryClient = new QueryClient();

ReactDOM.render(
  <DataContextProvider>
    <CartContextProvider>
      <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <App />
            {<ReactQueryDevtools />}
          </QueryClientProvider>
      </React.StrictMode>
    </CartContextProvider>
  </DataContextProvider>,
  document.getElementById('root')
);
