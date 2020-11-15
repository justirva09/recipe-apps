import { render } from '@testing-library/react';
import { View, SplashScreen, CardRecipes, ButtonCategoryMenu,ButtonCategoryMain } from 'components';
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
          <View classNames="home_username">
            <span>
              Hallo !
            </span>
            <span>
              Username
            </span>
          </View>
            <span>Apa yang mau kamu masak hari ini?</span>
          <View classNames="home_categ">
            <View className="categ_row">
              <ButtonCategoryMain />
              <ButtonCategoryMain />
              <ButtonCategoryMain />
              <ButtonCategoryMain />
            </View>
          </View>
        </View>
        <span>Resep Terbaru</span>
        <CardRecipes />
        <View>
          
        </View>
      </View>
    </View>
  </React.Fragment>
)


export default Home;
