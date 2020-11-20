import {React, PropTypes} from 'libraries';
import View from '../View';

const FormText = ({title, value}) => {
  return(
    <View classNames='formGroup'>
      <span>{title}</span>
      <span>{value}</span>
    </View>
  )
}


FormText.propsTypes = {
  title: PropTypes.string,
  value: PropTypes.string
}
export default FormText;
