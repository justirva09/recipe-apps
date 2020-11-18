import { React, useHistory } from 'libraries';
import { Button, View } from 'components';
import googleLogo from 'assets/images/google.svg'
import { login, showPopup } from 'services';
import { createMessageFirebase, validateEmail } from 'helper';

const FormLogin = () => {
  const history = useHistory();
  const [isRegister, setForm] = React.useState(false)
  const [loading, setLoading] = React.useState(false);
  const [email, changeEmail] = React.useState('', { name: 'email' });
  const [password, changePassword] = React.useState('');

  const setLoginForm = () => {
    setForm(false);
  }
  const setRegisterForm = () => {
    setForm(true);
  }

  const submitLogin = async () => {
    if (!email || !password) {
      return showPopup({
        title: 'Formulir tidak lengkap',
        description:
          'Formulir tidak diisi dengan benar! Pastikan untuk mengisi formulir login dengan benar'
      });
    }

    if (!validateEmail(email)) {
      return showPopup({
        title: 'Email tidak valid',
        description: 'Pastikan format email untuk akun anda diisi dengan benar!'
      });
    }

    setLoading(true);
    try {
      await login({ email, password });
      setLoading(false);
      showPopup({
        title: 'Berhasil Masuk',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lorem bibendum, pulvinar est in, blandit sem. Pellentesque vitae mi eu quam tempor luctus in a purus. Duis quis sollicitudin tortor.'
      });
    } catch (err) {
      let { message } = err;
      if (err.code) {
        message = createMessageFirebase(err.code);
      }
      showPopup({
        title: 'Terjadi Kesalahan!',
        description: message
      });
      setLoading(false);
    }
  };

  return(
    <React.Fragment>
      <View classNames="form__header">
        <View classNames="row">
          <View 
            onClick={setLoginForm} 
            classNames={`col-md-6 form__headerTitle ${isRegister ? '' : 'active'}`}
          >
            <h4>Masuk</h4>
          </View>
          <View 
            onClick={setRegisterForm} 
            classNames={`col-md-6 form__headerTitle ${isRegister ? 'active' : ''}`}
          >
            <h4>Daftar</h4>
          </View>
        </View>
      </View>
      <View classNames="form__body">
        <View classNames="container" style={{marginTop:'2rem'}}>
          {isRegister ? (
          <View classNames="blockRegister">
            <View classNames="form-group">
              <input 
                type="text" 
                placeholder="Nama Lengkap" 
              />
            </View>
            <View classNames="form-group">
              <input type="email" placeholder="Email" />
            </View>
            <View classNames="form-group">
              <input type="password" placeholder="Kata Sandi" />
            </View>
            <View classNames="form-group">
              <input type="password" placeholder="Ulangi Kata Sandi" />
            </View>
            <View classNames="form-group">
              <Button color="primary">Daftar</Button>
            </View>
          </View>

          ) : (
          <View classNames="blockLogin">
            <View classNames="form-group">
              <input 
                type="email" 
                placeholder="Email" 
                onChange={e => changeEmail(e.target.value)}
              />
            </View>
            <View classNames="form-group">
              <input 
                type="password" 
                placeholder="Password" 
                onChange={e => changePassword(e.target.value)}
              />
            </View>
            <View classNames="form-group">
              <Button onClick={submitLogin} color="primary">Masuk</Button>
            </View>
          </View>
          )}
          <View classNames="form__other">
            <View classNames="form__other--separator"></View>
            <p>Atau Masuk Dengan</p>
          </View>
          <View classNames="form__other--bottom">
            <View classNames="form__btnLogin" style={{display: 'flex'}}>
            <span
              style={{
                backgroundImage: `url(${googleLogo})`, 
                backgroundRepeat: 'no-repeat', 
                width: 24, 
                height: 24,
                backgroundSize: 'contain',
                backgroundPosition: '50%',
                textIndent: -99999,
                display: 'block'
              }}
            >google</span>
            <h4 className="form__otherText">Google</h4>
            </View>
          </View>
        </View>
      </View>
    </React.Fragment>
  )
}

const LandingPages = () => {
  document.title = `Recipe Apps`
  return(
    <React.Fragment>
      <View classNames="landingPages">
       <View classNames="landingPages__header">
          <View classNames="landingPages__logo"></View>
       </View>
       <View classNames="landingPages__body">
         <FormLogin />
       </View>
      </View>
    </React.Fragment>
  )
}


export default LandingPages;
