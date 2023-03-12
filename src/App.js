import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import ShoppingItemList from './Components/Shopping/ShoppingItemList';
import { ShoppingCartContextProvider } from './Store/ShoppingCartContext';
import Layout from './UI/Layout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ShoppingCartContextProvider>
        <Layout>
          <ShoppingItemList />
        </Layout>
      </ShoppingCartContextProvider>
    </ChakraProvider>
  );
}

export default App;
