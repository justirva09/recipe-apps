import {React, PropTypes, Link} from 'libraries';
import {View, Image} from 'components/atoms';

const Featured = ({data}) => {
  const slugTitle = data.title
  .toLowerCase()
  .replace(/\s+/g, '-');
  return(
    <View classNames="col-featured">
      <Image source={data.images} alt={data.title}/>
      <View classNames="col-featured__title">
        <h2>
          <Link to={`detail/${data.id_resep}/${slugTitle}`}>{data.title}</Link>
        </h2>
      </View>
    </View>
  )
}

Featured.propsTypes = {
  data: PropTypes.object
};

export default Featured;
