/* eslint-disable no-useless-concat */
import { AppContainer, Authentication, BaseLayout, Private, SplashScreen } from "components";
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

  const Message = () => {
    console.log("%c" + "Hold Up!", "color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");
    console.log("%c" + "dont open console without permission ur parents! this is wrong dude!.", "font-size: 18px; font-weight: bold;color: #FFF")
    console.log("%c" + "If someone told you to copy/paste something here you have an 11/10 chance you're being scammed.", "font-size: 18px; font-weight: bold;color: #FFF")
    console.log("%c" + "All Right Reserved, 2020 - Proudly Present https://github.com/justirva09/recipe-apps", "font-size: 18px; font-weight: bold;color: #FFF")
  }

  React.useEffect(() => {
    const init = async () => {
      try {
        Message();
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
                          <Authentication>
                            <val.component {...routesProps} />
                          </Authentication>
                        </AppContainer>
                        )
                      }
                      if(val.name === "Error") {
                        return(
                          <AppContainer>
                            <Private>
                              <val.component {...routesProps} />
                            </Private>
                          </AppContainer>
                        )
                      }
                      return(
                        <AppContainer showNav>
                          <Private>
                            <val.component {...routesProps} />
                          </Private>
                        </AppContainer>
                      )
                    }} 
                    {...props}
                  />
                ))}
            </Switch>
          )}
        <SplashScreen show={appLoading} />
      </BaseLayout>
    </BrowserRouter>
  )
}

export default App;
