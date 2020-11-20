import { React, PropTypes, NavLink } from 'libraries';
import { View } from 'components/atoms';
import { Popup } from 'components/molecules';
import { AiOutlineAppstore, AiOutlineTags, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

const AppContainer = ({children, showNav}) => {
  return(
    <View classNames="AppContainer">
      {children}
      {showNav ? (
        <View classNames="navbar">
          <NavLink exact={true} activeClassName='is-active' className="navbar__NavLink--item" to="/beranda">
            <span className="navbar__icon"><AiOutlineAppstore size={24} /></span>
            Home
          </NavLink>
          <NavLink  activeClassName='is-active' className="navbar__NavLink--item" to="/category/all">
            <span className="navbar__icon"><AiOutlineTags size={24} /></span>
            Category
          </NavLink>
          <NavLink  activeClassName='is-active' className="navbar__NavLink--item" to="/search">
            <span className="navbar__icon"><AiOutlineSearch size={24} /></span>
            Pencarian
          </NavLink>
          <NavLink activeClassName='is-active' className="navbar__NavLink--item" to="/profile">
            <span className="navbar__icon"><AiOutlineUser size={24} /></span>
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
