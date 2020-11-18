import { View, BaseLayout, SplashScreen } from "components";
import { 
  React,
  BrowserRouter, 
  Switch, 
  Route,
  AnimatedSwitch,
  spring
} from "libraries";
import { routes } from 'routes';
import { showPopup } from "services";

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24
  });
}

const pageTransitions = {
  atEnter: {
    opacity: 0,
    offset: 100
  },
  atLeave: {
    opacity: 0,
    offset: glide(-100)
  },
  atActive: {
    opacity: 1,
    offset: glide(0)
  }
};

const App = (props) => {
  const [appLoading, setAppLoading] = React.useState(true);

  React.useEffect(() => {
    const init = async() => {
      try {
        
      } catch (error) {
        showPopup({
          title: 'Terjadi Kesalahan!',
          description: error.message
        })
      }
      setAppLoading(false)
    }
    init()
  }, [])

  return(
    <BrowserRouter>
      {!appLoading && (
        <BaseLayout>
          <AnimatedSwitch
            {...pageTransitions}
            className="switch-wrapper"
            mapStyles={styles => ({
              opacity: styles.opacity,
              transform: `translateX(${styles.offset}%)`
            })}
              >
            {routes.map((val,i) => (
              <Route 
                key={i} 
                path={val.path} 
                exact={val.exact} 
                name={val.name} 
                component={val.component} 
                {...props}
              />
            ))}
          </AnimatedSwitch>
        </BaseLayout>
      )}
      <SplashScreen show={appLoading} />
    </BrowserRouter>
  )
}

export default App;
