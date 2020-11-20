import { React, PropTypes, NavLink } from 'libraries';
import { View } from 'components/atoms';
import { Popup } from 'components/molecules';

const AppContainer = ({children, showNav}) => {
  return(
    <View classNames="AppContainer">
      {children}
      {showNav ? (
        <View classNames="navbar">
          <NavLink exact={true} activeClassName='is-active' className="navbar__NavLink--item" to="/beranda">
            <span className="navbar__icon">ICON</span>
            Home
          </NavLink>
          <NavLink exact={true} activeClassName='is-active' className="navbar__NavLink--item" to="/category/all">
            <span className="navbar__icon">ICON</span>
            Category
          </NavLink>
          <NavLink exact={true} activeClassName='is-active' className="navbar__NavLink--item" to="/search">
            <span className="navbar__icon">ICON</span>
            Pencarian
          </NavLink>
          <NavLink exact={true} activeClassName='is-active' className="navbar__NavLink--item" to="/about">
            <span className="navbar__icon">ICON</span>
            About
          </NavLink>
          <NavLink exact={true} activeClassName='is-active' className="navbar__NavLink--item" to="/profile">
            <span className="navbar__icon">ICON</span>
            Profile
          </NavLink>
        </View>
      ) : null}
      <Popup />
    </View>
  )
}


AppContainer.propsTypes = {
  children: PropTypes.any
}

export default AppContainer;
