

import './App.css';
import { Navbar } from './components/navbar';
import { TextForm } from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import React,{useState} from 'react'


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";








function App() {
      // States 
      const [darkMode, darModemodifier] = useState('light');
      const [alert,setalert] = useState(null);


   

      // functions
      function ReturnProp(){
        return (
            {
                darkModeState: darkMode,
                darkStateModifier: darModemodifier
              }
        )
      }

      let showAlert= (messege, type, padding=0 )=>{
        
          setalert({
            msg: messege,
            typ: type,
            padd: padding , 
          });
          
          
          setTimeout(()=>{
            setalert(null);
          },2000)
      }
      



       // routes

    const router = createBrowserRouter([
      {
        path:"/",
        element:<>
        <Navbar dayLightColorSetting={ReturnProp()} showAlert={showAlert}  name ="Hello"/>
        <TextForm headings="Enter the Text to Analyze:" ID="inputText"  showAlert={showAlert} dayLightColorSetting={ReturnProp()}/>
        </>
      },
      {
        path:'/about',
        element:
        <>
          <Navbar dayLightColorSetting={ReturnProp()} showAlert={showAlert}  name ="Hello"/>
          <About  dayLightColorSetting={ReturnProp()}/>
        </>
        
      }
    ]);



        return (
          <>   
          <RouterProvider router={router} />  
          
          
        


             {/* <Navbar dayLightColorSetting={ReturnProp()} showAlert={showAlert}  name ="Hello"/> */}
            
             {/* <Alert alert={alert} /> */}
            
               {/* <TextForm headings="Enter the Text to Analyze:" ID="inputText"  showAlert={showAlert} dayLightColorSetting={ReturnProp()}/> */}
            

            {/* <About  dayLightColorSetting={ReturnProp()}/>  */}
            
          </>
        ); 

};


export default App;

