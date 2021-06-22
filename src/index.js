import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {QueryClientProvider, QueryClient} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './chakraConfig/theme';

const queryClient = new QueryClient();

ReactDOM.render(
  <ChakraProvider theme={theme} resetCSS={true}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
