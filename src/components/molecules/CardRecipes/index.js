import {React, PropTypes} from "libraries";
import {View} from 'components/atoms';

const CardRecipes = (props) =>{
    return(
      <div className="card-recipe">
        <div className="card-row">
        <div className="card-header">
          <div className="card-thumb">
            <img src="https://1.bp.blogspot.com/-UaObm5v9JDw/X6U5bPD83gI/AAAAAAAAAyg/g7gkfXJMcJUb19wBkR0kq3BwQOMlbEahACLcBGAsYHQ/s0/TIRTOID-NutrisiPahaAyam.jpg"/>
          </div>
        </div>
          <div className="card-body">
            <h2>{props.cardTitle}</h2>
            <div className="div-Kosong"></div>
            <div className="card-footer">
            <span>{props.cardCateg}</span>
            <span>{props.cardDiff}</span>
          </div>
          </div>
        </div>
    </div>
    )
}

CardRecipes.defaultProps = {
  cardTitle: 'Undefined',
  cardCateg : 'Main Dish',
  cardDiff : 'Mudah'
}

CardRecipes.propTypes = {
  cardTitle: PropTypes.string,
  cardCateg: PropTypes.string,
  cardDiff: PropTypes.string
}
export default CardRecipes ;
