import {React, Component} from 'libraries';
import {View, CardAbout} from 'components'
import profileData from 'assets/dummy/profile.json';

import Slider from "react-slick";
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

class About extends Component{
  state = {
    data : profileData
  }
  
  render(){
    return(
      <React.Fragment>
        <View className="about__container">
          <View className="about__wrapper">
            <View className="about__header">
              <View className="about__logo">
                <img 
                  alt="logo"
                  src="https://1.bp.blogspot.com/-sdWb9hBXEWY/X6JgxZ7WDuI/AAAAAAAAAxg/NPqR6MV5feMgPNTR_WGg0VK4vWAcsVx4gCLcBGAsYHQ/s0/logo11_3_12058%2B1.png" 
                />
              </View>
              <View className="about__desc">
                WTF Apps (What's in The Fridge) adalah aplikasi yang bertujuan untuk mencari resep makanan berdasarkan keyword bahan makanan yang dimiliki user yang bisa di input kedalam sistem.
              </View>
            </View>
            <View className="about_body">
              <View className="about__team">
                Our Team
              </View>
              <View className="about_us">
              <Slider {...settings}>
                {profileData.map((data, index) =>(
                  <CardAbout data={data} key={index} />
                ))}
              </Slider>
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default About;