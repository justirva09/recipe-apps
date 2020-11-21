import { BlockDetail, View } from 'components';
import { React, useParams } from 'libraries';
import Resep from 'assets/dummy/resep.json';
import loadingScreen from 'assets/images/Loading.gif';


const Detail = (props) => {
  const [detailResep, setResep] = React.useState({});
  const [isLoading, setLoading] = React.useState(true)
  const { id } = useParams();

  React.useEffect(() => {
    getDetailRecipes()
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  const getDetailRecipes = () => {
    const detailId = parseInt(id)
    Resep.filter(val => val.id_resep === detailId ? setResep(val) : null)
  }

  document.title = `What in The Fridge - ${detailResep.title}`
  return(
    <React.Fragment>
      <BlockDetail data={detailResep} {...props}/>
      <View classNames="LoadScreenData" style={{display: `${isLoading === true ? '': 'none'}`}}>
          <img src={loadingScreen} alt="Loading Screen" width="100%" />
        </View>
    </React.Fragment>
  )
}


export default Detail;
