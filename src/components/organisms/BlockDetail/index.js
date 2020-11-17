import { PropTypes, React, _ } from 'libraries';
import { FormText, View } from 'components/atoms';
import { Collapse } from 'components/molecules';

class BlockDetail extends React.Component {
  static propsTypes = {
    data: PropTypes.object,
    history: PropTypes.object
  }
  render(){
    const { data, history } = this.props;
    const colorLeveling = 
    data.level === 'Mudah' ? '#4caf50' : 
    data.level === 'Sulit' ? '#e91e63' : 
    data.level === 'Sedang' ? '#ff9800' : '#333';
    return(
      <React.Fragment>
        <View classNames="o-blockDetail">
          <View classNames="o-blockDetail__thumbnail">
            <span onClick={() => history.goBack()} className="o-blockDetail__closeBtn">X</span>
            <img src={data.images} alt={data.title}  className="o-blockDetail__thumbnail--img"/>
          </View>
          <View classNames="o-blockDetail__contentWrapper">
            <View classNames="container">
              <View classNames="o-blockDetail__content">
                  <View classNames="o-blockDetail__headerContent">
                      <View classNames="row" style={{justifyContent: 'space-between',alignItems: 'center'}}>
                        <h4>{data.title}</h4>
                        <View classNames="o-blockDetail__levelBlock">
                          <h6>Kesulitan</h6>
                          <span style={{color: `${colorLeveling}`}}>{data.level}</span>
                        </View>
                      </View>
                  </View>
                  <View classNames="o-blockDetail__bodyContent">
                    <Collapse title="Bahan Makanan" status={true}>
                      {!_.isEmpty(data.bahan) && _.isArray(data.bahan) ? (
                        data.bahan.map((val, i) => (
                          <FormText key={i} title={val.nama} value={val.jumlah} />
                        ))
                      ): "Loading.."}
                    </Collapse>
                    <Collapse title="Cara Masak" status={false}>
                    {!_.isEmpty(data.caraMasak) && _.isArray(data.caraMasak) ? (
                        data.caraMasak.map((val, i) => (
                          <FormText key={i} title={val} />
                        ))
                      ): "Loading.."}
                    </Collapse>
                  </View>
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    )
  }
}

export default BlockDetail;
