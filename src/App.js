import { View, BaseLayout } from "components";
import { 
  BrowserRouter, 
  Switch, 
  Route,
  AnimatedSwitch,
  spring
} from "libraries";
import { routes } from 'routes';

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

const App = (props) => (
  <BrowserRouter>
    <Switch>
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
    </Switch>
  </BrowserRouter>
)

export default App;
