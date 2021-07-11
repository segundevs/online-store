import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {QueryClientProvider, QueryClient} from 'react-query';
import DataContextProvider from './context/dataContext/DataContext';
//import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

ReactDOM.render(
  <DataContextProvider>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        {/* {<ReactQueryDevtools />} */}
      </QueryClientProvider>
    </React.StrictMode>
  </DataContextProvider>,
  document.getElementById('root')
);
