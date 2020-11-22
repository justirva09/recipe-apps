import {React, PropTypes, connect} from 'libraries'
import {Button, ImageInput, View} from 'components'
import { profileSelector } from 'modules';
import { logout, showPopup, updateProfile } from 'services';
import { createMessageFirebase, handleAsync } from 'helper';

const Profile = ({ profile, history }) => {
  const [photo, changePhoto] = React.useState(null);
  const [photoFile, changePhotoFile] = React.useState(null);
  const [name, changeName] = React.useState('');
  const [email, changeEmail] = React.useState('');

  const initData = React.useCallback(() => {
    if(profile) {
      changePhoto(profile.photo || '');
      changeName(profile.name || '');
      changeEmail(profile.email || '');
    }
  }, [profile]);

  const handleLogout = () => {
    showPopup({
      title: 'Yakin udah Mau keluar?',
      description: 'Kalau begitu jangan lupa kasih feedback aplikasinya ya :D',
      showSecondButton: true,
      onClickButton: logout
    })
  }

  const handleChangePhoto = (file, imageBase64) => {
    changePhotoFile(file);
    changePhoto(imageBase64);
  };

  function bytesToSize(bytes) {
    var sizes = ['Bytes', 'kb', 'mb', 'gb', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
 }


  const handleSubmit = async () => {
    if (!name) {
      return showPopup({
        title: 'Terjadi Kesalahan!',
        description:
          'Form tidak boleh kosong, isi dengan benar atau tidak merubah sama sekali!',
        onClickButton: initData
      });
    }

    if (photoFile && photoFile.size > 2000000) {
      const sizeImages = bytesToSize(photoFile.size)
      return showPopup({
        title: 'Terjadi Kesalahan!',
        description:
          `Wahh, File foto kamu sampai ${sizeImages} itu terlalu besar!, ini tidak baik untuk server kita! Ukuran file foto harus kurang dari 2mb. Coba kompres dulu ya!`
      });
    }

    const payload = {
      name,
      photo
    };

    const [res, err] = await handleAsync(updateProfile(payload));

    if (err) {
      console.log(err);
      return showPopup({
        title: 'Terjadi kesalahan!',
        description: createMessageFirebase(err.code)
      });
    }

    showPopup({
      title: 'Berhasil!',
      description: 'Informasi profile kamu sudah berhasil di perbarui!'
    });

    return res;
  };

  React.useEffect(() => {
    initData();
  }, [initData]);

  return(
    <React.Fragment>
      <View className="container">
        <View className="main-apps">
          <View className="profile">
            <View className="profile__header">
             <View classNames="form-group screenAnimationBottom">
              <ImageInput
                image={photo} 
                onChange={handleChangePhoto}
              />
             </View>
            </View>
            <View classNames="profile__body screenAnimation">
              <View classNames="form-group">
                <input 
                  onChange={e => changeName(e.target.value)}
                  className="form-control" 
                  type="text" 
                  placeholder="Full Name" 
                  value={name}
                />
              </View>
              <View classNames="form-group">
                <input 
                  onChange={e => changeEmail(e.target.value)}
                  className="form-control" 
                  type="email"
                  placeholder="Email" 
                  value={email}
                />
              </View>
              <View classNames="form-group">
                <Button 
                  color="primary"
                  onClick={handleSubmit}
                >
                  Simpan
                </Button>
                <Button 
                  color="primary" 
                  onClick={() => history.goBack()} 
                  style={{marginLeft: 5}}
                >
                  Kembali
                </Button>
                <Button 
                  color="danger" 
                  block 
                  style={{marginTop: 8}}
                  onClick={handleLogout}
                >
                  Keluar
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </React.Fragment>
  )
}


Profile.propsTypes = {
  history: PropTypes.object,
  profile: PropTypes.object
}

const ReduxState = state => ({
  profile: profileSelector(state)
})


export default connect(ReduxState, null)(Profile)