import { PropTypes, React, _, connect } from 'libraries';
import { FormText, View, Button } from 'components/atoms';
import { Collapse } from 'components/molecules';
import ReactDOMServer from 'react-dom/server'
import {
  EmailShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  EmailIcon
} from "react-share";
import { appConfig } from 'configs';
import { profileSelector,  } from 'modules';
import { showPopup } from 'services';
import { MetaHeader } from 'components/templates';

class BlockDetail extends React.Component {
  static propsTypes = {
    data: PropTypes.object,
    history: PropTypes.object,
    profile: PropTypes.object
  }

  state = {
    isExists: false
  }

  addToBookmark = (data) => {
    var resep = [];
    resep = JSON.parse(localStorage.getItem('resep')) || [];
    resep.push(data);
    localStorage.setItem('resep', JSON.stringify(resep));
  }

  // filterBookmark = () => {
  //   var retrievedData = localStorage.getItem("resep");
  //   var result = JSON.parse(retrievedData)
  //   if(result === null) {
  //     return false;
  //   }
  //  const filtered = result.filter(val => val.id_resep === val.id_resep ? console.log : this.setState({isExists: false}));
  //  console.log(this.state.isExists)
  // }


  render(){
    const { data, history, profile } = this.props;
    const colorLeveling = 
    data.level === 'Mudah' ? '#4caf50' : 
    data.level === 'Sulit' ? '#e91e63' : 
    data.level === 'Sedang' ? '#ff9800' : '#333';

    const category = 
    data.category === 'Main Dish' ? 'Hidangan Utama' :
    data.category === 'Dessert' ? 'Pencuci Mulut' :
    data.category === 'Drink' ? 'Minuman' : null;
      return(
        <React.Fragment>  
        <MetaHeader title={data.title} category={category} images={data.images} url={`${appConfig.url.api}/detail/${data.id_resep}/${!_.isEmpty(data) && _.isObject(data) ? data.title.toLowerCase().replace(/\s+/g, '-') : null}`} />  
        <View classNames="o-blockDetail">
          <View classNames="o-blockDetail__thumbnail">
            <span onClick={() => history.goBack()} className="o-blockDetail__closeBtn">X</span>
            <img src={data.images} alt={data.title}  className="o-blockDetail__thumbnail--img"/>
          </View>
          <View classNames="o-blockDetail__contentWrapper screenAnimation">
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
                      <View classNames="o-blockDetail__headerContent--bottom" style={{marginTop: '2rem'}}>
                        <EmailShareButton 
                        className="btn-email-share"
                          title={data.title} 
                          url={`${appConfig.url.api}/detail/${data.id_resep}/${!_.isEmpty(data) && _.isObject(data) ? data.title.toLowerCase().replace(/\s+/g, '-') : null}`}
                          subject={`Resep ${category} dijamin bikin ngiler!`}
                          body={`Halo ini aku ${profile.name}, aku ingin mengirimkan resep ${data.title} yang super enak! `}
                          >
                          <EmailIcon />
                        </EmailShareButton>
                        {/* <Button onClick={() => this.addToBookmark(data)} style={{marginLeft: 5}}>Simpan Resep</Button> */}
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
                    <Collapse title="Cara Memasak" status={false}>
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

const reduxtState = state => ({
  profile: profileSelector(state)
})

export default connect(reduxtState)(BlockDetail);
