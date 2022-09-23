// import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [mode,Setmode] =useState("light")
  const Clicked = ()=>{
    if (mode==="dark"){
      Setmode("light")
      document.body.style.backgroundColor="white"
      ShowAlert("Light Mode Enabled","success")
      
    }
    else{
      ShowAlert("Dark Mode Enabled","success")
      Setmode("dark")
      document.body.style.backgroundColor="rgb(15, 2, 92)"
    }
  }
  const [alerts,SetAlert]=useState(null);
  const ShowAlert = (message,type)=>{
    SetAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      SetAlert(null);
    }, 1200);
  }
    return (
    <>
<Router>
<Navbar title="Text Editor" about="About Us" DarkMode={Clicked}  mode={`${mode}`} />
<Alerts alert={alerts}/>
<Switch>
          <Route exact path="/about">
            <div className="container mt-5">
            <About mode={`${mode}`}/>
            </div>
          </Route>
          <Route exact path="/">
<TextForm heading="Enter Your Text To Analyze" mode={`${mode}`} ShowAlert={ShowAlert}/>
          </Route>
        </Switch>
</Router>
    </>

  );

} 
export default App;

