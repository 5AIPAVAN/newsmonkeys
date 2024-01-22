// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {  // CREATED USING 'rcc' shortcut

  name="SAIPAVAN";  // NO NEED TO USE 'let' TO DECLARE VARIABLE IN CLASS
  pageesizee=6;

  render() {
    return (
      <div>
        <Router>
            <Navbar/>
          <Routes>

            
              <Route exact path="/" element={<News key="general"  pageSize={this.pageesizee} category="general"/>}/> 
               <Route exact path="/sports"  element={<News key="sports"  pageSize={this.pageesizee} category="sports"/>}/>
               <Route exact path="/science"  element={<News  key="science" pageSize={this.pageesizee} category="science"/>}/>
               <Route exact path="/business"  element={<News  key="business"pageSize={this.pageesizee} category="business"/>}/>              
               <Route exact path="/entertainment"  element={<News key="entertainment" pageSize={this.pageesizee} category="entertainment"/>}/>

                
          </Routes>
            </Router>
      </div>
    )
  }
}



