import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Info from './components/Info/Info';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
// import { Footer } from './components/Footer/Footer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/:userId?' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/info' element={<Info />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
