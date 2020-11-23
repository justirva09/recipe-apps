/* eslint-disable no-useless-concat */
import { AppContainer, BaseLayout, SplashScreen } from "components";
import { 
  React,
  BrowserRouter, 
  Route,
  Switch,
} from "libraries";
import { routes } from 'routes';
import { getProfile, showPopup } from "services";

const App = (props) => {
  const [appLoading, setAppLoading] = React.useState(true);

  React.useEffect(() => {
    const init = async () => {
      console.log("%c" + "Hold Up!", "color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");
      console.log("%c" + "dont open console without permission ur parents! this is wrong dude!.", "font-size: 18px; font-weight: bold;color: #FFF")
      console.log("%c" + "If someone told you to copy/paste something here you have an 11/10 chance you're being scammed.", "font-size: 18px; font-weight: bold;color: #FFF")
      console.log("%c" + "All Right Reserved, 2020 - Proudly Present https://github.com/justirva09/recipe-apps", "font-size: 18px; font-weight: bold;color: #FFF")
      try {
        await getProfile();
      } catch (err) {
        showPopup({
          title: 'Terjadi Kesalahan!',
          description: err.message
        });
      }
      setAppLoading(false);
    };
    init();
  }, []);

  return(
    <BrowserRouter>
      <BaseLayout>
          {!appLoading && (
            <Switch>
                {routes.map((val,i) => (
                  <Route 
                    key={i} 
                    path={val.path} 
                    exact={val.exact} 
                    name={val.name} 
                    render={routesProps => {
                      if(val.name === "Landing Page") {
                        return(
                        <AppContainer>
                          <val.component {...routesProps} />
                        </AppContainer>
                        )
                      }
                      return(
                        <AppContainer showNav>
                          <val.component {...routesProps} />
                        </AppContainer>
                      )
                    }} 
                    {...props}
                  />
                ))}
                <Route path="*" exact={true} render={() => <h1>404</h1>}/>
            </Switch>
          )}
        <SplashScreen show={appLoading} />
      </BaseLayout>
    </BrowserRouter>
  )
}

export default App;
