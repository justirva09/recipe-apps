import { View } from 'components/atoms';
import { PropTypes, React , connect} from 'libraries';
import { profileSelector } from 'modules';

const Header = ({profile}) => {
  const handlerGreeting = () => {
  var today = new Date()
  var curHr = today.getHours()
  if (curHr < 12) {
    return "Good Morning"
  } else if (curHr < 18) {
    return "Selamat Siang"
  } else {
    return "Selamat Sore"
  }
  }
  return(
    <header>
      <View classNames="headerBlock">
        <span>{handlerGreeting()},</span>
        <h2 className="headerBlock__username">{profile ? profile.name : 'Loading..'}</h2>
        <View classNames="headerBlock__pict">
          <View className="headerBlock__pict--img" style={{backgroundImage: `url(${profile ? profile.photo : ''})`}}></View>
        </View>
      </View>
    </header>
  )
}

Header.defaultProps = {
  profile: {
    name: "Loading.."
  }
}

Header.propsTypes = {
  profile: PropTypes.object
}

const reduxState = state => ({
  profile: profileSelector(state)
})

export default connect(reduxState, null)(Header);
