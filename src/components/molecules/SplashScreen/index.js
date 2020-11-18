import { React, PropTypes, useMemo, cx } from 'libraries';
import {View} from 'components/atoms';

const SplashScreen = ({show}) => useMemo(() => {
  const className = cx('splashscreen-background LoadingScreen', {
    'LoadingScreen--show': show,
    'LoadingScreen--animate': show
  });
  return(
    <View className={className}>
      <View className="splashscreen-logo">
        <img src="https://1.bp.blogspot.com/-sdWb9hBXEWY/X6JgxZ7WDuI/AAAAAAAAAxg/NPqR6MV5feMgPNTR_WGg0VK4vWAcsVx4gCLcBGAsYHQ/logo11_3_12058%2B1.png"/>
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
