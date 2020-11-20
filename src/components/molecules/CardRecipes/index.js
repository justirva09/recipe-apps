import {React, PropTypes, Link} from "libraries";
import {View} from 'components/atoms';

const CardRecipes = ({ data }) => {
  const slugTitle = data.title
  .toLowerCase()
  .replace(/\s+/g, '-');
  const colorLeveling = 
    data.level === 'Mudah' ? '#4caf50' : 
    data.level === 'Sulit' ? '#e91e63' : 
    data.level === 'Sedang' ? '#ff9800' : '#333';
    return(
    <View className="cardRecipe">
      <View className="cardRecipe__inner">
        <View className="cardRecipe--row">
          <View className="cardRecipe__header">
            <View className="cardRecipe__thumb">
              <img src={data.images} alt={data.title ? data.title : 'Undefined'} />
            </View>
          </View>
            <View className="cardRecipe__body">
              <h2>
                <Link to={`/detail/${data.id_resep}/${slugTitle}`}>{data.title}</Link>
              </h2>
              <View className="cardRecipe__body--bottom">
              <span>
                <Link to={`/category/${data.slug}`} style={{textDecoration:'none', color: '#444'}}>
                {data.category}
              </Link>
              </span>
              <span style={{color: `${colorLeveling}`}}>{data.level}</span>
            </View>
            </View>
          </View>
      </View>
    </View>
    )
}

CardRecipes.defaultProps = {
  data: {
    title: 'Undefined',
    category: 'Main Dish',
    level: 'Sedang'
  }
}

CardRecipes.propTypes = {
  data: PropTypes.object
}

export default CardRecipes ;
