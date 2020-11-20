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
    const init = () => {
      try {
         getProfile()
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
                <Route render={() => <h1>404</h1>}/>
            </Switch>
          )}
        <SplashScreen show={appLoading} />
      </BaseLayout>
    </BrowserRouter>
  )
}

export default App;
