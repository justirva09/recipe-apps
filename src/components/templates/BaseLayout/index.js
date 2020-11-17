import { React, PropTypes, NavLink } from 'libraries';
import { View } from 'components/atoms';

const BaseLayout = ({children}) => {
  return(
    <View classNames="baseLayout">
      {children}
      <View classNames="navbar">
          <NavLink exact={true} activeClassName='is-active' className="navbar__NavLink--item" to="/">
            <span className="navbar__icon">ICON</span>
            Home
          </NavLink>
          <NavLink exact={true} activeClassName='is-active' className="navbar__NavLink--item" to="/category">
            <span className="navbar__icon">ICON</span>
            Category
          </NavLink>
          <NavLink exact={true} activeClassName='is-active' className="navbar__NavLink--item" to="/pencarian">
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
    </View>
  )
}


BaseLayout.propsTypes = {
  children: PropTypes.any
}

export default BaseLayout;
