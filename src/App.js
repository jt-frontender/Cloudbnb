import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Rooms from './components/Rooms'
import Experiences from './components/Experiences'
import Bottomnavbar from './components/Bottomnavbar'


function App() {
  return (
    <div className="App z-20">
      <Navbar/>
      <Home/>
      <Rooms/>
      <Experiences/>
      <Bottomnavbar/>
    </div>
  );
}

export default App;
