import { React, PropTypes, connect, useHistory } from 'libraries';
import { View } from 'components/atoms';
import { Popup } from 'components/molecules';
import { profileSelector } from 'modules';

const BaseLayout = ({children, profile}) => {
  const history = useHistory();

  React.useEffect(() => {
    if (profile) {
      history.replace('/beranda');
    } else {
      history.replace('/')
    }
  }, [history, profile]);
  
  return(
    <View classNames="baseLayout">
      {children}
      <Popup />
    </View>
  )
}


BaseLayout.propsTypes = {
  children: PropTypes.any,
  profile: PropTypes.object
}

BaseLayout.defaultProps = {
  profile: null
}

const reduxState = state => ({
  profile: profileSelector(state)
});

export default connect(reduxState)(BaseLayout);
