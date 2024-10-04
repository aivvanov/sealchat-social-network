import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from './components//Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Info } from './components/Info/Info';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
// import { Footer } from './components/Footer/Footer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar store={props.store} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile
            store={props.store}
          />} />
          <Route path='/dialogs/*' element={<Dialogs
            store={props.store}
          />} />
          <Route path='/info' element={<Info />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App
