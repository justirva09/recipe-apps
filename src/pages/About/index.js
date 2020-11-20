import {React, Component} from 'libraries';
import {View} from 'components'
class About extends Component{
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              </View>
            </View>
            <View className="about_body">
              <View className="about_us">
                <View className="card__about">
                  <View className="card__header">
                    <View className="card__title">
                      What's in The Fridge
                    </View>
                    <View className="card__thumb">
                      <img src="https://1.bp.blogspot.com/-sdWb9hBXEWY/X6JgxZ7WDuI/AAAAAAAAAxg/NPqR6MV5feMgPNTR_WGg0VK4vWAcsVx4gCLcBGAsYHQ/s0/logo11_3_12058%2B1.png" />
                    </View>
                  </View>
                  <View className="card__body">
                    <View className="card__name">
                      Irvan
                    </View>
                    <View className="card__jobdesk">
                      Scrum Master
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default About;