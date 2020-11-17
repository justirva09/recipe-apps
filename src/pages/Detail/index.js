import { BlockDetail } from 'components';
import { React, useParams } from 'libraries';
import Resep from 'assets/dummy/resep.json';

const Detail = (props) => {
  const [detailResep, setResep] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    compareObjRecipe()
  })

  const compareObjRecipe = () => {
    const detailId = parseInt(id)
    Resep.filter(val => val.id_resep === detailId ? setResep(val) : null)
  }

  document.title = `Recipe Apps - ${detailResep.title}`
  return(
    <React.Fragment>
      <BlockDetail data={detailResep} {...props}/>
    </React.Fragment>
  )
}


export default Detail;
