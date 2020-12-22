import { React, PropTypes, connect, useHistory  } from 'libraries';
import { profileSelector } from 'modules';

const Authentication = ({children, profile}) => {
  const history = useHistory();

  React.useEffect(() => {
    if (profile) {
      history.replace('/beranda');
    }
  }, [history, profile]);

  return <React.Fragment>{children}</React.Fragment>
}

Authentication.propsTypes = {
  children: PropTypes.any,
  profile: PropTypes.object
}

Authentication.defaultProps = {
  profile: null
};

const reduxState = state => ({
  profile: profileSelector(state)
});


export default connect(reduxState)(Authentication);
