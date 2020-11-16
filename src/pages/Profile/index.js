import {React,Component} from 'libraries'
import {View} from 'components'
import { render } from '@testing-library/react';

class Profile extends Component{
    state = {
      images : "https://www.pngfind.com/pngs/m/62-626956_profile-man-icon-hd-png-download.png"
    }
    
  handleChangeImage= (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2 ){
        this.setState({images: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  render(){
    return(
    <React.Fragment>
      <View className="container">
        <View className="main-apps">
          <View className="image-profile">
            <View className="img_prof">
              <label for = "image-input">
                <img src={this.state.images} alt ="your image"/>
              </label>
                <input id="image-input" type='file' onChange={this.handleChangeImage}/> 
            </View>
            <View className="input-image">
            </View>
          </View>
        </View>
      </View>
    </React.Fragment>
    )
  }
}


export default Profile