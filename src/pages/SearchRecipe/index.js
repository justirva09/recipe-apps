import { React } from 'libraries';
import { View, CardRecipes } from 'components';
import resepList from 'assets/dummy/resep.json';

const SearchRecipe = () => {
  const [bahanMakanan, setBahanMakanan] = React.useState("");
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    if(bahanMakanan === "") {
       setList(resepList)
    }
}, [bahanMakanan]);

  const handleSearchChange = (keyword = "") => {
    let result = [];
    if(keyword === ",") {
      return false;
    }

    let arrayKeyword = keyword.split(",");

    result = resepList.filter((list) => {
      if(list && list.bahan && list.bahan.length > 0) {
        let isHasIngridient = false;
        const { bahan } = list;

        bahan.forEach((dataBahan) => {
          arrayKeyword.forEach((dataKeyword) => {
            const condition =
            dataKeyword &&
            dataKeyword !== " " &&
            dataBahan.nama &&
            dataBahan.nama
              .toLowerCase()
              .indexOf(dataKeyword.trim().toLowerCase()) !== -1;
            if(condition) {
              isHasIngridient = true;
            }
          });
        });

        return isHasIngridient;
      }

      return false;
    });

    setList(result);
  }
  
  const handleChange = ({ target: { value } }) => {
    handleSearchChange(value);
    setBahanMakanan(value);
  }
  document.title = `Recipe Apps - Pencarian`
  return(
    <React.Fragment>
      <View className="container">
        <View className="searchElement">
          <input
            type="text"
            className="searchElement__input"
            onChange={handleChange}
            value={bahanMakanan}
            placeholder="Ketikkan Bahan Makanan"
          />
        </View>
        <View classNames="row screenAnimation">
          {list.map((value,index) => (
          <CardRecipes data={value} key={index} />
          ))}
        </View>
      </View>
    </React.Fragment>
  )
}


export default SearchRecipe;
