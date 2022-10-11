import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Blog from './components/Blog';
// import Assiatant from './components/Assiatant';
import Todo3 from './components/Todo3';
function App() {
  const [state,Setstate] =useState(0)
  const Clicked = async()=>{
      if (state===0){
        setTimeout(async() => {
        }, 200);
        Setstate(100)
        // this.Setstate(100)
      }
      if(state===100) {
        setTimeout(async() => {
        }, 200);
        setingState(99)
      }
    else{
      setTimeout(async() => {
      }, 200);
      setingState(100)
      // Setstate(100)
      }
      Clicked()
    }
    const setingState = async(num)=>{
    Setstate(num)
   }

    return (
    <>
    <LoadingBar
         height={3}
        color='#f11946'
        progress={state}
      />
<Router>
      <Navbar click={Clicked} />
        <Switch>
          <Route exact path="/about" >
            <About/>
          </Route>
          <Route exact path="/texteditors"  >
              <Home/>
          </Route>
          <Route exact path="/blog" >
              <Blog/>
          </Route>
          <Route exact path="/assistant" >
              <Todo3 />
          </Route>
        </Switch>
</Router>
</>
  );

} 
export default App;
