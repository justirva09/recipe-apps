import { React, PropTypes } from 'libraries';
import { View } from 'components/atoms';
import { Popup } from 'components/molecules';

const BaseLayout = ({children}) => {
  
  return(
    <View classNames="baseLayout">
      {children}
      <Popup />
    </View>
  )
}


BaseLayout.propsTypes = {
  children: PropTypes.any,
}

export default BaseLayout
