import { View, BlockRecentRecipe } from 'components';
import { React } from 'libraries';

const Auth = () => {
  document.title = `Recipe Apps`
  return(
    <React.Fragment>
      <View className="container">
        <View className="main-apps">
          <View classNames="Auth-header">
            HEADER
          </View>
          <span>Hai, Selamat Datang <strong>username</strong></span>
          <BlockRecentRecipe />
        </View>
      </View>
    </React.Fragment>
  )
}


export default Auth;
