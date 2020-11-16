import { render } from '@testing-library/react';
import { View, SplashScreen, CardRecipes, ButtonCategoryMenu,ButtonCategoryMain, BlockRecentRecipe } from 'components';
import { React } from 'libraries';



const BaseHeader = () => (
  <header>
    <View classNames="row">
      <h1>test</h1>
    </View>
  </header>
);

const Home = () => (
  <React.Fragment>
    <View className="container">
      <View className="main-apps">
        <View classNames="home-header">
          HEADER
        </View>
        <span>Resep Terbaru</span>
        <BlockRecentRecipe />
      </View>
    </View>
  </React.Fragment>
)


export default Home;
