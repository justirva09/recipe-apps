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

  handleRand = (array) => {
    var tmp, current, top = array.length;
      if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
    }

    randomArray = (array = []) =>{
      var randomIndex = Math.floor((Math.random()*array.length));
      console.log('randomIndex', randomIndex)
      return array[randomIndex]
    }
    
    
    // getRandomRecipe = (data) => {
    //   var newArray = [];
    //   var max = 3;
    //   while(newArray.length < data.length) {
    //     var item = this.randomArray(data);
    //     var hasItem = false;
    
    //     newArray.forEach(val => {
    //       if(val == item) {
    //         hasItem = true;
    //       }
    //     })
    //     if(!hasItem) {
    //       newArray.push(item)
    //     }
    //   }
    //   return newArray;
    // }

  render() {
    this.handleRand(dataResep)
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
