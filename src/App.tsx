import React from 'react';
import Header from './component/header';
import Body from './component/body';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Toaster 
         position="top-right" 
         toastOptions={{
           duration: 1000,
           style: {
             background: 'white',
             color: 'black',
           },
           success: {
             duration: 1000,
             theme: {
               primary: 'green',
               secondary: 'black',
             },
            },
          }}
             />
   <Header/>
   <Body/>
  </>
  );
}

export default App;
