import {React,Component} from 'libraries'
import {View} from 'components'
import { render } from '@testing-library/react';

class Profile extends Component{
    state = {
      images : "https://img.favpng.com/6/14/19/computer-icons-user-profile-icon-design-png-favpng-vcvaCZNwnpxfkKNYzX3fYz7h2.jpg"
    }
    
  handleChangeImage= (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2 ){
        this.setState({images: reader.result})
      }else{
        reader.onabort = () =>{
          this.setState({images: this.state.images})
        }
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  render(){
    return(
    <React.Fragment>
      <View className="container">
        <View className="main-apps">
          <View className="profile">
            <View className="profile__header">
              <View classNames="profile__input">
                  <img src={this.state.images} alt ="your image"/>
              </View>
              <View classNames="profile__hover">
                <label htmlFor = "imageProfile--input">
                  <img src="https://1.bp.blogspot.com/-Fo3ItN60AFI/X7NyTVaiO2I/AAAAAAAAA1Q/50B-IO-71dQbn-6wjWI0qwLQqDKsytRKgCLcBGAsYHQ/s0/camera%2B2.png"/>
                </label>
              </View>
                  <input 
                    id="imageProfile--input"
                    className="imageProfile--input" 
                    type='file' onChange={this.handleChangeImage}
                  /> 
            </View>
            <View classNames="profile__body">
              <View classNames="form-group">
                <input className="form-control" type="text" placeholder="Username" />
              </View>
              <View classNames="form-group">
                <input className="form-control" type="text" placeholder="Email" />
              </View>
              <View classNames="profile_footer">
                <View classNames="profile__saveBtn">
                  <button type="button" className="btn--primary">Save</button>
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


export default Profile