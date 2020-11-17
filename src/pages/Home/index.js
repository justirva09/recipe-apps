import { View, BlockRecentRecipe } from 'components';
import { React } from 'libraries';

const Home = () => (
  <React.Fragment>
    <View className="container">
      <View className="main-apps">
        <View classNames="home-header">
          HEADER
        </View>
        <span>Hai, Selamat Datang <strong>username</strong></span>
        <BlockRecentRecipe />
      </View>
    </View>
  </React.Fragment>
)


export default Home;
