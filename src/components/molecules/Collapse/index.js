import { React, PropTypes } from 'libraries';
import { View } from 'components/atoms';

const Collapse = ({children, title, status}) => {
  const [isToggle, setToggle] = React.useState(status);

  const handleToggle = () => {
    setToggle(!isToggle);
  }

  return(
    <View classNames={`collapseElement ${isToggle ? 'collapseElement--show' : ''}`}>
      <View onPress={handleToggle} classNames="collapseElement__header">
        <View classNames="row" style={{justifyContent: 'space-between',alignItems: 'center'}}>
          <h4>{title}</h4>
          <View classNames="collapseElement__icon">
            <span></span>
            <span></span>
          </View>
        </View>
      </View>
      <View classNames="collapseElement__body">
        {children}
      </View>
    </View>
  )
}

Collapse.propsTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  status: PropTypes.bool
}

export default Collapse;
