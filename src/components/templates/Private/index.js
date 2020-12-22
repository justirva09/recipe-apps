import { React, PropTypes, connect, useHistory  } from 'libraries';
import { profileSelector } from 'modules';

const Private = ({children, profile}) => {
  const history = useHistory();

  React.useEffect(() => {
    if (!profile) {
      history.replace('/')
    }
  }, [history, profile]);

  return <React.Fragment>{children}</React.Fragment>
}

Private.propsTypes = {
  children: PropTypes.any,
  profile: PropTypes.object
}

Private.defaultProps = {
  profile: null
};

const reduxState = state => ({
  profile: profileSelector(state)
});


export default connect(reduxState)(Private);
