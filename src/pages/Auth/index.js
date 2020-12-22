import { View, BlockRecentRecipe, Authentication } from 'components';
import { React } from 'libraries';

const Auth = () => {
  document.title = `Recipe Apps`
  return(
      <Authentication>
        <View className="container">
          <View className="main-apps">
            <View classNames="Auth-header">
              HEADER
            </View>
            <span>Hai, Selamat Datang <strong>username</strong></span>
            <BlockRecentRecipe />
          </View>
        </View>
      </Authentication>
  )
}


export default Auth;
