import {React, PropTypes} from "libraries"
import {View} from "components"


const CardAbout = ({data}) =>{
  return(
  <View className="card__about">
    <View className="card__header">
      <View className="card__thumb">
        <img src={data.images} />
      </View>
    </View>
    <View className="card__body">
      <View className="card__name">
        {data.nama}
      </View>
      <View className="card__jobdesk">
        {data.job}
      </View>
    </View>
  </View>
  )
}

CardAbout.defaultTypes ={
  data : {
    image : 'https://1.bp.blogspot.com/-sdWb9hBXEWY/X6JgxZ7WDuI/AAAAAAAAAxg/NPqR6MV5feMgPNTR_WGg0VK4vWAcsVx4gCLcBGAsYHQ/s0/logo11_3_12058%2B1.png',
    nama : "Irvan Fahmi Rudy",
    job : "Scurum Master"
  }
}

CardAbout.propTypes = {
  data : PropTypes.object
}
export default CardAbout;

