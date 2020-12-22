import { React, PropTypes, useMemo, cx } from 'libraries';
import {View} from 'components/atoms';

const SplashScreen = ({show}) => useMemo(() => {
  const className = cx('splashscreen-background splashscreen-background__LoadingScreen', {
    'splashscreen-background__LoadingScreen--show': show,
    'splashscreen-background__LoadingScreen--animate': show
  });
  return(
    <View className={className}>
      <View className="splashscreen-background__logo">
      </View>
    </View>
  )
}, [show]);


SplashScreen.propsTypes = {
  show: PropTypes.bool
};

SplashScreen.defaultProps = {
  show: true
}

export default SplashScreen;
