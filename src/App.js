
import React, {useState, useEffect} from 'react';
import MusicPlayer from './Components/MusicPlayer';
import Liblary from './Components/Sidebar/Liblary'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './Components/SideBar'
import Like from './Components/Sidebar/Like'


import './App.css';

function App() {
  const[songs, setSongs] = useState(null)

    const[currentSongI, setCurrentSongI] = useState(0)
    const[nextSongI, setNextSongI] = useState(currentSongI + 1)
  
    useEffect(() =>{

      fetch('http://localhost:8000/data')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        setSongs(data)  
      })

    },[])
    

  return (
    <Router>
   <>
   <div>
    <header>
    M- Player 
    </header>
   </div>
   <SideBar />
    <div className="App">
      
    <Switch>
      <Route exact path='/home'>
      {songs && <MusicPlayer currentSongI={currentSongI} setNextSongI={setNextSongI} setCurrentSongI={setCurrentSongI} nextSongI={nextSongI} songs={songs}/>}
      </Route>
      <Route path='/liblary'>
          <Liblary />
      </Route>
      <Route path='/like'>
        <Like />
      </Route>
    </Switch>
    </div>
    </>
    </Router>
 
    
  );
}

export default App;