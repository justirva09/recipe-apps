import { View } from 'components/atoms';
import { CardRecipes } from 'components/molecules';
import { React, Component } from 'libraries';
import dataResep from 'assets/dummy/resep.json';
import {logout} from 'services';
class BlockRecentRecipe extends Component {
  state = {
    data: dataResep
  }


  handleLogout = async() => {
    try {
      await logout();
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return(
      <section className="section-container">
        <View classNames="widgetTitle">
          {/* <h2 onClick={this.handleLogout}>Resep Terbaru</h2> */}
        </View>
        <View classNames="row screenAnimation">
          {dataResep.map((value, index) => (
            <CardRecipes data={value} key={index} />
            ))}
        </View>
    </section>
    )
  }
}

export default BlockRecentRecipe;
