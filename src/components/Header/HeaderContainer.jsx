import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { getIsAuth, getUserLogin } from '../../redux/header-selectors';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return ({
        isAuth: getIsAuth(state),
        login: getUserLogin(state)
    });
}

export default connect(mapStateToProps, { logout })(HeaderContainer);