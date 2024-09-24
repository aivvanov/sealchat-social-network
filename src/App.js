import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.dialogsPage.dialogs} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile
              state={props.state.profilePage} />} />
            <Route path='/dialogs/*' element={<Dialogs
              state={props.state.dialogsPage} />} />
            <Route path='/info' element={<Info />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App
