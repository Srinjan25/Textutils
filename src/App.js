
        import './App.css';

        import Navbar from './components/Navbar';
        import TextForm from './components/textform';
        import About from './components/About';
        import React, { useState } from 'react';
        import Alert from './components/Alert';
        import {
          BrowserRouter as Router,
          Switch,
          Route,
          Link
        } from "react-router-dom";



        function App() {
          const [darkMode, setDarkMode] = useState('light');
          const [aler, setAlert] = useState(null);

          const showAlert = (message, type)=>{
              setAlert({
                  message: message,
                  type: type
              })
              
          }

          const toggleMode = ()=>{
            if(darkMode === 'light'){
              setDarkMode('dark');
              document.body.style.backgroundColor = '#042743';
              showAlert("Dark mode has been enabled", "success");
            }
          
        else{
            setDarkMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
        }
            
          }

          return (
            <>
            <Router>
            <Navbar title="Textutils1" mode={darkMode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container my-3">
            <Switch>
            <Route path="/about">
              <About />
            </Route>
            
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={darkMode}/>
               
            </Route>
          </Switch>
        </div>
          </Router>
          
          </>
          );
        }

        export default App;
