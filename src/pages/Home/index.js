import { View, BlockRecentRecipe, Header } from 'components';
import Featured from 'components/molecules/Featured';
import { React } from 'libraries';
import Slider from "react-slick";
import resep from 'assets/dummy/resep.json';

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
};


const Home = () => {
  document.title = `What in The Fridge's`
  return(
    <React.Fragment>
      <View className="container">
        <Header />
        <View classNames="col-featured__row">
          <Slider {...settings}>
          {resep.map((val, i) => (
            <Featured key={i} data={val} />
          ))}
          </Slider>
        </View>
        <BlockRecentRecipe />
      </View>
    </React.Fragment>
  )
}


export default Home;
