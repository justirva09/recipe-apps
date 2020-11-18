import { View, BlockRecentRecipe } from 'components';
import { React } from 'libraries';
import { logout } from 'services';

const Home = () => {
  document.title = `Recipe Apps`
  return(
    <React.Fragment>
      <View className="container">
        <BlockRecentRecipe />
      </View>
    </React.Fragment>
  )
}


export default Home;
