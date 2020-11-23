import { React } from 'libraries';
import { View, CardRecipes, Header } from 'components';
import resepList from 'assets/dummy/resep.json';

const categoryType = [
  {
    id: 1,
    name: 'All',
    slug: 'all',
    img: 'https://i2.wp.com/resepkoki.id/wp-content/uploads/2020/09/Resep-Ayam-Kecap-Pedas.jpg?fit=1079%2C1202&ssl=1'
  },
  {
    id: 2,
    name: 'Main Dish',
    slug: 'main-dish',
    img: 'https://i1.wp.com/resepkoki.id/wp-content/uploads/2018/02/Resep-Sop-Ceker.jpg?fit=1300%2C1225&ssl=1'
  },
  {
    id: 3,
    name: 'Dessert',
    slug: 'desert',
    img: 'https://i2.wp.com/resepkoki.id/wp-content/uploads/2020/10/Resep-Panna-Cotta.jpg?fit=867%2C1300&ssl=1'
  },
  {
    id: 4,
    name: 'Drink',
    slug: 'drink',
    img: 'https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/01/Resep-Overnight-Oat.jpg?fit=1232%2C1300&ssl=1'
  }
];


class Category extends React.Component {
  state = {
    data: resepList
  }

  changeSlug = (val) => {
    const { history, match } = this.props;
    const { params } = match;
    console.log(params)
    history.replace(`/category/${val}`)
  }

  getListRecipe = () => {
    const { data } = this.state;
    const { match } = this.props;
    const { params } = match;
    var filtered = data.filter(val => val.slug === params.slug)
    return filtered
  }

  getTitleSlug = () => {
    const { match } = this.props;
    const { params } = match;
    var filtered = categoryType.filter(val => val.slug === params.slug)
    return filtered;
  }

  render() {
    const { match } = this.props;
    const { params } = match;
    const { slug } = params;
    const newDataRecipe = this.getListRecipe();
    const filterTitle = this.getTitleSlug();
    window.scrollTo(0, 0);
    document.title = `What in The Fridge - ${filterTitle[0].name}`
    return(
    <React.Fragment>
      <View className="container">
        <Header />
        <View classNames="categoryBlock">
          <View classNames="categoryBlock__row row">
            {categoryType.map((val, i) => (
            <View key={i} classNames="categoryBlock__card col-md-3" onPress={() => this.changeSlug(val.slug)}>
              <View classNames="categoryBlock__inner" style={{backgroundImage: `url(${val.img})`}}>
                <View classNames="categoryBlock__icon">
                  <span>Menu</span>
                  <h4>{val.name}</h4>
                </View>
              </View>
              <h4 style={{marginTop: 3}}>{val.name}</h4>
            </View>
            ))}
          </View>
        </View>
        <View classNames="categoryBlock__widgetTitle">
          {filterTitle.map((val, i) => {
            if(slug === 'all') {
              return <h3 key={i}>All Dishes</h3>
            }
            return(
              <h3 key={i}>{val.name}</h3>
            )
          })}
        </View>
        <View classNames="row screenAnimation">
          {slug === 'all' ? (
            resepList.map((value,index) => (
              <CardRecipes data={value} key={index} />
            ))
          ) : (
            newDataRecipe.map((value,index) => (
              <CardRecipes data={value} key={index} />
            ))
          )}
        </View>
      </View>
    </React.Fragment>
  )
  }
}


export default Category;
