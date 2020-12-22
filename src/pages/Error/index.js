import { React, PropTypes } from 'libraries';
import { View, Private, Button } from 'components';
import errorBg from 'assets/images/errorbg.jpeg'

const styles = {
  width: '100%', textAlign:'center', paddingTop: 8
}
const Error = ({history, props}) => {
  document.title = `What in The Fridge's - Page Error!`
  return(
    <React.Fragment>
      <Private>
      <View className="container">
        <View classNames="error__bg" style={{backgroundImage: `url(${errorBg})`}}></View>
        <View classNames="row">
          <h3 style={styles}>AWWW...DON’T CRY</h3>
          <h5 style={styles}>It's just a 404 Error!</h5>
          <h5 style={styles}>The Link you followed problably broken, or the page has been removed.</h5>
          <View style={styles}>
            <Button variant="primary" block onClick={() => history.push('/beranda')}>Back</Button>
          </View>
        </View>
      </View>
      </Private>
    </React.Fragment>
  )
}

Error.propsTypes = {
  history: PropTypes.object
}



export default Error;
