import React from 'react';
import logo from './logo.svg';
import './App.css';
import "leaflet/dist/leaflet.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main'
import SidebarMain from './components/sidebar/SidebarMain'


function App() {

  return (
    <div className="App">
      <Main></Main>
      <SidebarMain></SidebarMain>
    </div>
  );
}

export default App;
