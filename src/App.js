import React, { Component } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import './App.css';
import Info from './components/Info/Info';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { withRouter } from './withRouter';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Loader from './components/common/Loader/Loader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const DialogsContainerWithSuspense = withSuspense(DialogsContainer);
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ProfileContainerWithSuspense = withSuspense(ProfileContainer);


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Loader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainerWithSuspense />} />
            <Route path='/dialogs/*' element={<DialogsContainerWithSuspense />} />
            <Route path='/info' element={<Info />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Navigate to='/profile' />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </div >
    )
  };
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const SealChatApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
}

export default SealChatApp;