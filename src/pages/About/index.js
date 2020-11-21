import {React, Component} from 'libraries';
import {View, CardAbout} from 'components'
import profileData from 'assets/dummy/profile.json';

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
                <img src="https://1.bp.blogspot.com/-sdWb9hBXEWY/X6JgxZ7WDuI/AAAAAAAAAxg/NPqR6MV5feMgPNTR_WGg0VK4vWAcsVx4gCLcBGAsYHQ/s0/logo11_3_12058%2B1.png" />
              </View>
              <View className="about__desc">
                WTF Apps (What's in The Fridge) adalah aplikasi yang bertujuan untuk mencari resep makanan berdasarkan bahan makanan yang dimiliki user yang bisa di input kedalam sistem.
              </View>
            </View>
            <View className="about_body">
              <View className="about__team">
                Our Team
              </View>
              <View className="about_us">
                {profileData.map((data, index) =>(
                  <CardAbout data={data} key={index} />
                ))}
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default About;