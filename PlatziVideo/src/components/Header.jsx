import React from 'react';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import { logoutRequest } from '../actions';

const Header = (props) => {
  const {user} = props;

  const hasUser = Object.keys(user).length > 0;

  const handleLogout = ()=>{
    props.logoutRequest({})
  }

  return(
      <header className="header">
        <Link to='/'><img className="header__img" src={logo} alt="Platzi Video" /></Link>
        <div className="header__menu">
          <div className="header__menu--profile">
            {hasUser 
                ?
                <img src={gravatar(user.email)} alt={user.email} />
                :
                <img src={userIcon} alt="" />
            }
            <p>Perfil</p>
          </div>
          <ul>
            
            {
              hasUser
                ?
                <li><a href="/">{user.name}</a></li>
                : null
            }

            {
              hasUser 
                ?
                <li><a href="/" onClick={handleLogout}>Cerrar Sesión</a></li>
                :
                <li><Link to="/login">Iniciar Sesión</Link></li>
            }
          </ul>
        </div>
      </header>
  )
};

const mapStateToProp = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProp, mapDispatchToProps)(Header)